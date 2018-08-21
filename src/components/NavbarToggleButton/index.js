import aNavbarToogleButton from './NavbarToggleButton.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aNavbarToogleButton
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
