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

export default defineConfig({
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [json()],
});
