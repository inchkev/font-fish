/*
 * By Kevin Chen.
 * Adapted from
 * https://github.com/evanw/theta/blob/master/fonts/generate.js
 * by Evan Wallace.
 */

var opentype = require('opentype.js');
var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
var pako = require('pako');

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
  var glyphs = {};
  var fontNames = [];
  var units = options.unitsPerEm;

  const codepoints = options.unicodes.map( ([start, end]) => range(start, end)).flat();
  for (var i = 0; i < codepoints.length; i++) {
    glyphs[codepoints[i]] = [];
  }

  // for (let i = 0; i < options.inputFonts.length; i++) {
  for (const input of options.inputFonts) {
    const buffer = new Uint8Array(fs.readFileSync(input)).buffer;
    const font = opentype.parse(buffer);
    fontNames.push(path.basename(input, '.ttf'));

    console.log(path.basename(input, '.ttf'));
    var pathsize = 0;

    for (let i = 0; i < codepoints.length; i++) {
      const char = String.fromCharCode(codepoints[i]);
      const glyph = font.charToGlyph(char);
      const path = glyph.getPath(0, 0, 1); // x, y, font size in pixels
      // if (codepoints[i] != glyph.unicode && glyph.unicode !== void 0) {
      //   console.log(glyph.unicode);
      //   throw new Error(`Font ${input} is missing character ${char}`);
      // }
      const compiledPath = compilePathCommands(path.commands, font.unitsPerEm);
      const pathLength = compiledPath.length;
      pathsize += pathLength;
      glyphs[codepoints[i]].push({
        // codepoint: codepoints[i],
        advanceWidth: glyph.advanceWidth / font.unitsPerEm,
        ascender: font.ascender / font.unitsPerEm * units,
        descender: font.descender / font.unitsPerEm * units,
        path: compilePathCommands(path.commands, font.unitsPerEm),
      });
    }
    console.log(pathsize);
  }

  // generate compact bin for each codepoint
  // for (let i = 0; i < codepoints.length; i++) {
  for (const codepoint of codepoints) {
    var bytes = [];
    var pathOffset = 4 + 12 * glyphs[codepoint].length;
    // 12 = 4 shorts (x2) and 1 int (x4)
    // should be equal to options.inputFonts.length;

    // units per em
    shortToBytes(units, bytes);
    // number of fonts
    shortToBytes(options.inputFonts.length, bytes);

    for (let i = 0; i < glyphs[codepoint].length; i++) {
      var glyph = glyphs[codepoint][i];
      shortToBytes(Math.round(glyph.advanceWidth * units), bytes);
      shortToBytes(glyph.ascender, bytes);
      shortToBytes(glyph.descender, bytes);
      intToBytes(pathOffset, bytes);
      shortToBytes(glyph.path.length, bytes);

      pathOffset += glyph.path.length;
    }

    for (let i = 0; i < glyphs[codepoint].length; i++) {
      bytes.push.apply(bytes, glyphs[codepoint][i].path);
    }

    var buffer = Buffer.from(bytes);
    zlib.gzip(buffer, (err, result) => {
      if (err) throw err;
      fs.writeFileSync(options.outputDir + codepoint.toString().padStart(4, '0') + '.bin.gz', result);
    });
  }

  // TODO: save font index:order map
  ws = fs.createWriteStream(options.outputDir + 'names.txt');
  fontNames.forEach(name => ws.write(name + '\n'));
  ws.end();
}


function main() {
  const fontDirectory = __dirname + '/../src/all-ttf/';
  const fontFiles = fs.readdirSync(fontDirectory);
  var fontPaths = fontFiles.map(file => fontDirectory + file);

  const badFonts = [
    "Handjet[ELGR,ELSH,wght]",
    "Rubik80sFade-Regular",
  ];
  fontPaths = fontPaths.filter(p => !badFonts.includes(path.basename(p, '.ttf')));

  process({
    unitsPerEm: 1000,
    unicodes: [
      [0x0020, 0x007F], // Basic Latin
      // [0x00A0, 0x00FF]  // Latin-1 Supplement
    ],
    inputFonts: fontPaths,
    // output: __dirname + '/dist/fonts.bin'
    outputDir: __dirname + '/'
  });
}

main();
