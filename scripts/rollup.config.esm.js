import path from 'path'
import alias from 'rollup-plugin-alias'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import fs from 'fs'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'
import { name, dependencies } from '../package.json'

const base = path.resolve(__dirname, '..')
const src = path.resolve(base, 'src')
const dist = path.resolve(base, 'dist')

// Ensure dist directory exists
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist)
}

let plugins = [
  copy({
    './src/assets/vendor/font-awesome/fonts': './dist/fonts/',
    './src/assets/vendor/gilroy/fonts': './dist/fonts/',
    './src/assets/vendor/nucleo/fonts': './dist/fonts/',
    './src/assets/images': './dist/images',
    verbose: true
  }),
  scss(),
  alias({
    vue$: 'vue/dist/vue.common.js',
    '@': path.resolve('./src/'),
    resolve: ['.js', '.vue']
  }),
  vue({
    compileTemplate: true,
    htmlMinifier: {collapseBooleanAttributes: false}
  }),
  babel({
    plugins: ['external-helpers'],
    exclude: 'node_modules/**'
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  nodeGlobals()
]

module.exports = {
  input: path.resolve(src, 'index.js'),
  external: Object.keys(dependencies),
  plugins: plugins,
  output: [
    {
      format: 'es',
      file: path.resolve(dist, name + '.esm.js'),
      sourcemap: true
    }
  ]
}
