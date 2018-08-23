import aDropdown from './Dropdown.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aDropdown
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
