import alias from 'rollup-plugin-alias'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import { uglify } from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import replace from 'rollup-plugin-replace'
import copy from 'rollup-plugin-copy'
import scss from 'rollup-plugin-scss'
import fs from 'fs'
import path from 'path'
import { camelCase } from 'lodash'
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
    './src/assets/vendor/font-awesome/fonts/': './dist/fonts/',
    './src/assets/vendor/gilroy/fonts/': './dist/fonts/',
    './src/assets/vendor/nucleo/fonts/': './dist/fonts/',
    './src/assets/images/': './dist/images/',
    verbose: true
  }),
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

// Libs in `external` will not be bundled to dist,
// since they are expected to be provided later.
// We want to include some of them in the build, so we exclude it here.
const externalExcludes = [
  'popper.js',
  'lodash.startcase',
  'lodash.get',
  'vue-functional-data-merge',
  'vue2-transitions',
  'bootstrap-vue',
  'nouislider'
]

let config = {
  input: path.resolve(src, 'index.js'),
  external: Object.keys(dependencies).filter(
    dep => externalExcludes.indexOf(dep) === -1
  ),
  output: [
    {
      format: 'cjs',
      name: camelCase(name),
      file: path.resolve(dist, name + '.common.js'),
      sourcemap: true
    },
    {
      format: 'umd',
      name: camelCase(name),
      file: path.resolve(dist, name + '.js'),
      sourcemap: true
    }
  ],
  plugins: plugins
}

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

if (isProduction) {
  config.output.sourcemap = false
  config.plugins.push(
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  )
  config.plugins.push(uglify())
}

if (isDevelopment) {
  config.plugins.push(livereload())
  config.plugins.push(
    serve({
      contentBase: './dist/',
      port: 8080,
      open: true
    })
  )
}

export default config
