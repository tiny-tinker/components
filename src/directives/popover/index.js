import aPopover from './popover'
import { registerDirectives, vueUse } from '../../utils/plugins'

const directives = {
  aPopover
}

const VuePlugin = {
  install (Vue) {
    registerDirectives(Vue, directives)
  }
}

vueUse(VuePlugin)

export default VuePlugin
