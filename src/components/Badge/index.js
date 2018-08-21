import aBadge from './Badge.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aBadge
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
