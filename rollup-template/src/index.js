import RollupTemplate from './rollup-template.vue'

Object.defineProperty(RollupTemplate, 'install', {
  configurable: false,
  enumerable: false,
  value (Vue, options) {
    // Set default prop values for RollupTemplate
    for (const key in options) {
      if (key in RollupTemplate.props) {
        RollupTemplate.props[key].default = options[key]
      }
    }
    Vue.component('rollup-template', RollupTemplate)
  }
})

export default RollupTemplate
