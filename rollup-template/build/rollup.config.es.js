import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    format: 'es',
    file: './dist/rollup-template.esm.js',
    name: 'rollup-template',
    sourcemap: false
  }
})

export default config
