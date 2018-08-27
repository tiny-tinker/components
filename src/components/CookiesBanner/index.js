import aCookiesBanner from './CookiesBanner.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aCookiesBanner
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
