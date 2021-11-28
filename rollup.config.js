import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import copy from 'rollup-plugin-copy'
import serve from 'rollup-plugin-dev';

const srcDir = 'src';
const testDir = 'test';
const buildDir = 'build';

const config = {
  input: `${srcDir}/app.ts`,
  output: {
    file: `${buildDir}/app.js`,
    format: "iife",
    sourcemap: true,
    assetFileNames: "/assets/[name].[ext]",
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      plugins: [ postcssImport() ]
    }),
    babel({
      babelHelpers: 'bundled',
      presets: [['@babel/preset-env', { modules: false }]],
    }),
    typescript({ tsconfigDefaults: { compilerOptions: { target: 'es5', sourceMap: true } } }),
    terser(), // uncomment if obfucation and minification of the source code is desired
    copy({
      targets: [
        { src: `./${srcDir}/assets`, dest: `./${buildDir}` },
        { src: `./${srcDir}/index.html`, dest: `./${buildDir}` }
      ],
      copyOnce: true
    }),
    serve({
      host: '0.0.0.0',
      dirs: [buildDir],
      spa: true,
      port: 8080,
      proxy: [/*{
          from: '/your-api-context',
          to: 'http(s)://your-api-host/your-api-context'
        },
        {
            from: '/your-api-context/your-api-sub-uri',
            to: 'http(s)://another-api-host/another-api-context'
      }*/]
    })
  ]
};

export default config;
