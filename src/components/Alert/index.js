import aAlert from './Alert.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aAlert
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
