import aBaseCheckbox from './BaseCheckbox.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aBaseCheckbox
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
