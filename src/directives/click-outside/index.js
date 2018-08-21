import aClickOutSide from './click-outside'
import { registerDirectives, vueUse } from '../../utils/plugins'
const directives = {
  aClickOutSide
}

const VuePlugin = {
  install (Vue) {
    registerDirectives(Vue, directives)
  }
}

vueUse(VuePlugin)

export default VuePlugin
