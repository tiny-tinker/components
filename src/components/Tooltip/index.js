import aTooltip from './tooltip'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aTooltip
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
