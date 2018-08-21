import aPagination from './BasePagination.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aPagination
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
