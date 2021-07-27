import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import { defineConfig } from 'rollup';
import del from 'rollup-plugin-delete';
import scss from 'rollup-plugin-scss';
// import { terser } from 'rollup-plugin-terser';

// defineConfig used for intellisense..
export default defineConfig({
  input: 'src/main.js',
  output: [
    {
      dir: 'dist/js/cjs',
      format: 'cjs',
      // plugins: [terser()],   // for minification
    },
    {
      dir: 'dist/js/esm',
      format: 'esm',
      // plugins: [terser()],   // for minification
    },
  ],
  plugins: [
    json(),
    scss({
      output: 'dist/css/styles.css',
    }),
    babel({
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    del({
      targets: 'dist/*',
    }),
  ],
});
