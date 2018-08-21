import aIcon from './Icon.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aIcon
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
