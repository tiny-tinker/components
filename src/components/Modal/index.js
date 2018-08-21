import aModal from './Modal.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aModal
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
