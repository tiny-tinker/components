import aPlayer from './Player.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aPlayer
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
