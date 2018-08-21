import aBaseSlider from './BaseSlider.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aBaseSlider
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
