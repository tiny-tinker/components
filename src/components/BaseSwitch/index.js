import aSwitch from './BaseSwitch.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aSwitch
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
