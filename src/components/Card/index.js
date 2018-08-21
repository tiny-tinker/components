import aCard from './Card.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aCard
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
