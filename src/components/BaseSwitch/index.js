import aBaseSwitch from './BaseSwitch.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aBaseSwitch
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
