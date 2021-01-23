import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    format: 'umd',
    file: './dist/rollup-template.umd.js',
    name: 'rollup-template',
    sourcemap: false
  }
})

export default config
