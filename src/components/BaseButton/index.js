import aBaseButton from './BaseButton.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aBaseButton
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
