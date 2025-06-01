// const rust = import('../wasm/pkg');

// rust
//   .then(wasm => {
//     // Access the WebAssembly exports here
//     const { start } = wasm;
//     start(); // Call the WebAssembly function
    
//     // You can also use console.log here to verify that the module has loaded
//     console.log('WebAssembly module loaded successfully');
//   })
//   .catch(console.error);

// rust.greet
// import('../wasm/pkg/wasm.js');
import('../canvas/pkg')
  .catch(console.error);
// import { add } from '../wasm/pkg';

// const result = add(1, 2);
// console.log(`1 + 2 = ${result}`);