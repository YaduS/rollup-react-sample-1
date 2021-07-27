import json from '@rollup/plugin-json';
import { defineConfig } from 'rollup';
import scss from 'rollup-plugin-scss';
// import { terser } from 'rollup-plugin-terser';

// defineConfig used for intellisense..
export default defineConfig({
  input: 'src/main.js',
  output: [
    {
      dir: 'dist/js',
      format: 'cjs',
      // plugins: [terser()],   // for minification
    },
  ],
  plugins: [
    json(),
    scss({
      output: 'dist/css/styles.css',
    }),
  ],
});
