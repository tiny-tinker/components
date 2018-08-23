import ClickOutside from './click-outside'
import { registerDirectives, vueUse } from '../../utils/plugins'
const directives = {
  ClickOutside
}

const VuePlugin = {
  install (Vue) {
    registerDirectives(Vue, directives)
  }
}

vueUse(VuePlugin)

export default VuePlugin
