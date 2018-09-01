import aWordmark from './Wordmark.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aWordmark
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
