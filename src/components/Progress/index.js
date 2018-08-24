import aProgress from './Progress.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aProgress
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
