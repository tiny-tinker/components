import aTooltip from './tooltip'
import { registerDirectives, vueUse } from '../../utils/plugins'

const directives = {
  aTooltip
}

const VuePlugin = {
  install (Vue) {
    registerDirectives(Vue, directives)
  }
}

vueUse(VuePlugin)

export default VuePlugin
