import aCloseButton from './CloseButton.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aCloseButton
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
