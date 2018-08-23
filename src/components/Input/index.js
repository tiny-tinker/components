import aInput from './Input.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aInput
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
