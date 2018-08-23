import aCheckbox from './Checkbox.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aCheckbox
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
