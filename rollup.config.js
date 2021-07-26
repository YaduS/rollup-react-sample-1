import json from '@rollup/plugin-json';
// we can use either jsDoc of defineConfig for type intellisense
// /**
//  * @type {import('rollup').RollupOptions}
//  */
// const config = {
//   input: 'src/main.js',
//   output: {
//     file: 'bundle.js',
//     format: 'cjs',
//   },
//   plugins: [json()],
// };
// export default config;
// rollup.config.js
import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  input: 'src/main.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'printVersion',
      plugins: [terser()], // this does minification
    },
    {
      file: 'dist/bundle.iife.js',
      format: 'iife',
      name: 'printVersionIife',
    },
  ],
  plugins: [json()],
});
