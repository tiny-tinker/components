import aButton from './Button.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aButton
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
