import aSlider from './Slider.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aSlider
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
