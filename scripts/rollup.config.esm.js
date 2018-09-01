import path from 'path'
import alias from 'rollup-plugin-alias'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import fs from 'fs'
import scss from 'rollup-plugin-scss'
import svg from 'rollup-plugin-svg'
import { name, dependencies } from '../package.json'

const base = path.resolve(__dirname, '..')
const src = path.resolve(base, 'src')
const dist = path.resolve(base, 'dist')

// Ensure dist directory exists
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist)
}

let plugins = [
  svg(),
  scss({
    output: './dist/css/asyncy-vue.css'
  }),
  alias({
    vue$: 'vue/dist/vue.common.js',
    '@': path.resolve('./src/'),
    resolve: ['.js', '.vue']
  }),
  vue({
    compileTemplate: true,
    htmlMinifier: {collapseBooleanAttributes: false},
    css: false
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
