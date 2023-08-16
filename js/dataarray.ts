const INITIAL_CAPACITY = 1024;

export class DataArray {
  private _bytes: Uint8Array;
  _count: number = 0;
  _capacity: number = INITIAL_CAPACITY;
  _readOffset: number = 0;

  // constructor() {
  //   this._bytes = new Uint8Array(INITIAL_CAPACITY);
  // }

  constructor(bytes: Uint8Array) {
    this._bytes = bytes;
    this._count = this._capacity = bytes.length;
  }

  clear() {
    this._count = 0;
    this._readOffset = 0;
  }

  isEmpty(): boolean {
    return this._count == 0;
  }

  byteCount(): number {
    return this._count;
  }

  readOffset(): number {
    return this._readOffset;
  }

  private _grow() {
    this._capacity *= 2;
    let bytes = new Uint8Array(this._capacity);
    bytes.set(this._bytes);
    this._bytes = bytes;
  }

  hasMoreToRead(): boolean {
    return this._readOffset < this._count;
  }

  seekTo(count: number) {
    this._readOffset = count;
  }

  skipBytes(count: number) {
    this._readOffset += count;
  }

  appendBytes(bytes : Uint8Array) {
    const count = bytes.length;
    if (this._count + count > this._capacity) {
      this._grow();
    }
    this._bytes.set(bytes, this._count);
    this._count += count;
    return this;
  }

  //
  // Byte
  //

  byteAt(index: number): number {
    if (!(index >= 0 && index < this._count)) {
      throw new Error("Index out of bounds");
    }
    return this._bytes[index];
  }

  readByte(): number {
    let value = this.byteAt(this._readOffset);
    this._readOffset++;
    return value;
  }

  //
  // Short
  //

  shortAt(index: number): number {
    if (!(index >= 0 && index + 2 <= this._count)) {
      throw new Error("Index out of bounds");
    }
    let _bytes2 = new Uint8Array(2);
    let _short = new Int16Array(_bytes2.buffer);
    _bytes2[0] = this._bytes[index];
    _bytes2[1] = this._bytes[index + 1];
    return _short[0];
  }

  readShort(): number {
    let value = this.shortAt(this._readOffset);
    this._readOffset += 2;
    return value;
  }

  //
  // Int
  //

  intAt(index: number): number {
    if (!(index >= 0 && index + 4 <= this._count)) {
      throw new Error("Index out of bounds");
    }
    let _bytes4 = new Uint8Array(4);
    let _int = new Int32Array(_bytes4.buffer);
    _bytes4[0] = this._bytes[index];
    _bytes4[1] = this._bytes[index + 1];
    _bytes4[2] = this._bytes[index + 2];
    _bytes4[3] = this._bytes[index + 3];
    return _int[0];
  }

  readInt(): number {
    let value = this.intAt(this._readOffset);
    this._readOffset += 4;
    return value;
  }
}
