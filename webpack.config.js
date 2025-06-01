const path = require('path');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'www/js'),
        filename: 'index.js',
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "canvas")
        }),
    ],
    mode: 'development',
    experiments: {
        asyncWebAssembly: true
   }
};