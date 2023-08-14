/*
 * By Kevin Chen.
 * Adapted from
 * https://github.com/evanw/theta/blob/master/fonts/generate.js
 * by Evan Wallace.
 */

var opentype = require('opentype.js');
var fs = require('fs');

var byteArray = new Uint8Array(4);
var floatArray = new Float32Array(byteArray.buffer);
var shortArray = new Int16Array(byteArray.buffer);
var intArray = new Int32Array(byteArray.buffer);

var Command = {
  MOVE_TO: 0,
  LINE_TO: 1,
  CURVE_TO: 2,
  CLOSE: 3,
};

function floatToBytes(float, bytes) {
  floatArray[0] = float;
  bytes.push(
    byteArray[0],
    byteArray[1],
    byteArray[2],
    byteArray[3]);
}

function shortToBytes(short, bytes) {
  if (short < -0x8000 || short > 0x7FFF) {
    throw new Error('Cannot store ' + short + ' as a short');
  }
  shortArray[0] = short;
  bytes.push(
    byteArray[0],
    byteArray[1]);
}

function intToBytes(int, bytes) {
  intArray[0] = int;
  bytes.push(
    byteArray[0],
    byteArray[1],
    byteArray[2],
    byteArray[3]);
}

function compilePathCommands(commands, units) {
  var bytes = [];

  for (var i = 0; i < commands.length; i++) {
    var command = commands[i];
    switch (command.type) {
      case 'M': {
        bytes.push(Command.MOVE_TO);
        shortToBytes(Math.round(command.x * units), bytes);
        shortToBytes(Math.round(command.y * units), bytes);
        break;
      }

      case 'L': {
        bytes.push(Command.LINE_TO);
        shortToBytes(Math.round(command.x * units), bytes);
        shortToBytes(Math.round(command.y * units), bytes);
        break;
      }

      case 'Q': {
        bytes.push(Command.CURVE_TO);
        shortToBytes(Math.round(command.x1 * units), bytes);
        shortToBytes(Math.round(command.y1 * units), bytes);
        shortToBytes(Math.round(command.x * units), bytes);
        shortToBytes(Math.round(command.y * units), bytes);
        break;
      }

      case 'Z': {
        bytes.push(Command.CLOSE);
        break;
      }

      default: {
        throw new Error('Unsupported command "' + command.type + '"');
      }
    }
  }

  return bytes;
}

function range(start, end) {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
}

function process(options) {
  var glyphs = [];
  var ascender = 0;
  var descender = 0;
  var units = options.unitsPerEm;

  options.inputFonts.forEach(function (input) {
    const buffer = new Uint8Array(fs.readFileSync(input)).buffer;
    const font = opentype.parse(buffer);
    // console.log(font);

    ascender += font.ascender / font.unitsPerEm * units;
    descender += font.descender / font.unitsPerEm * units;

    const codepoints = options.unicodes.map( ([start, end]) => range(start, end)).flat();
    for (var i = 0; i < codepoints.length; i++) {
      const char = String.fromCharCode(codepoints[i]);
      const glyph = font.charToGlyph(char);
      const path = glyph.getPath(0, 0, 1); // x, y, font size in pixels
      if (codepoints[i] != glyph.unicode && glyph.unicode !== void 0) {
        throw new Error(`Font ${input} is missing character ${char}`);
      }
      console.log(path);
      glyphs.push({
        codepoint: codepoints[i],
        advanceWidth: glyph.advanceWidth / font.unitsPerEm,
        path: compilePathCommands(path.commands, font.unitsPerEm),
      });
      // console.log(char);
      // console.log(glyph.advanceWidth);
      // console.log();
    }
  });


  // var bytes = [];
  // var buffer = Buffer.from(bytes);
  // fs.writeFileSync(options.output, buffer);
}


function main() {
  process({
    unitsPerEm: 1000,
    unicodes: [
      [0x0021, 0x0022],
      // [0x0020, 0x007F], // Basic Latin
      // [0x00A0, 0x00FF]  // Latin-1 Supplement
    ],
    inputFonts: [
      __dirname + '/../src/all-ttf/NunitoSans-Regular.ttf',
      // __dirname + '/../src/all-ttf/Poppins-Bold.ttf'
    ],
    // output: __dirname + '/dist/fonts.bin'
    output: __dirname + '/fonts.bin'
  });
}

main();
