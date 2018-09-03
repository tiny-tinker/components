import aSnippet from './Snippet.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aSnippet
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
