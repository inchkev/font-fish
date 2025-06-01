import * as esbuild from 'esbuild';
import watPlugin from 'esbuild-plugin-wat';

// let ctx = await esbuild.build({
let ctx = await esbuild.context({
  entryPoints: ['js/index.js'],
  bundle: true,
  // minify: true,
  sourcemap: true,
  // target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outdir: 'www/js',
  plugins: [watPlugin({
    loader: 'file'
  })],
});

let { host, port } = await ctx.serve({
  servedir: 'www',
});
console.log(`Serving at http://localhost:${port}`)

// await ctx.watch()
// console.log('Watching...')