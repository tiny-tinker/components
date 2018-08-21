import asyncyBaseAlert from './BaseAlert.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  asyncyBaseAlert
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
