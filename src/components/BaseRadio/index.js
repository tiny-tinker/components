import aRadio from './BaseRadio.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aRadio
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
