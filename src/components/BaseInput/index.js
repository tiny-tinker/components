import aBaseInput from './BaseInput.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aBaseInput
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
