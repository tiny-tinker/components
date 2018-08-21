import aBaseProgress from './BaseProgress.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aBaseProgress
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
