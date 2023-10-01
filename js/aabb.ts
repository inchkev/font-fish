// Ported from https://github.com/evanw/theta/blob/c077923138be0f7aedc28cc0cd82d1066b1fe8fb/src/core/rect.sk

export class AABB {
  x: number = 0.0;
  y: number = 0.0;
  width: number = 0.0;
  height: number = 0.0;

  left(): number {
    return this.x;
  }

  top(): number {
    return this.y;
  }

  right(): number {
    return this.x + this.width;
  }

  bottom(): number {
    return this.y + this.height;
  }

  equals(box: AABB): boolean {
    return this.x == box.x && this.y == box.y && this.width == box.width && this.height == box.height;
  }

  isEmpty(): boolean {
    return this.width <= 0.0 || this.height <= 0.0;
  }

  set(box: AABB) {
    this.x = box.x;
    this.y = box.y;
    this.width = box.width;
    this.height = box.height;
  }

  clone(): AABB {
    let box = new AABB();
    box.set(this);
    return box;
  }

  toString(): string {
    return `AABB(${this.x}, ${this.y}, ${this.width}, ${this.height})`;
  }
}

export class AABBBuilder {
  minX: number = 0.0;
  maxX: number = 0.0;
  minY: number = 0.0;
  maxY: number = 0.0;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.minX = this.minY = Infinity;
    this.maxX = this.maxY = -Infinity;
  }

  build(): AABB {
    let box = new AABB();
    box.x = this.minX;
    box.y = this.minY;
    box.width = this.maxX - this.minX;
    box.height = this.maxY - this.minY;
    return box;
  }

  include(x: number, y: number): void {
    this.minX = Math.min(this.minX, x);
    this.minY = Math.min(this.minY, y);
    this.maxX = Math.max(this.maxX, x);
    this.maxY = Math.max(this.maxY, y);
  }
}
