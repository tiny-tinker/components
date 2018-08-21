import aNav from './BaseNav.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aNav
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
