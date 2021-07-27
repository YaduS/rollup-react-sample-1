import json from '@rollup/plugin-json';
import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';

// defineConfig used for intellisense..
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
