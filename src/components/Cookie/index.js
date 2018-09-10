import aCookie from './Cookie.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aCookie
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
