import VueLazyload from 'vue-lazyload'
import * as components from './components'
import * as directives from './directives'
import { vueUse } from './utils/plugins'
import './assets/vendor/nucleo/css/nucleo.css'
import './assets/vendor/font-awesome/css/font-awesome.css'
import './assets/vendor/gilroy/css/gilroy.css' // Import Gilory font
import './assets/scss/asyncy.scss'

const VuePlugin = {
  install: function (Vue) {
    if (Vue._asyncy_vue_installed) {
      return
    }

    Vue._asyncy_vue_installed = true

    // Register component plugins
    for (let plugin in components) {
      Vue.use(components[plugin])
    }

    // Register directive plugins
    for (let plugin in directives) {
      Vue.use(directives[plugin])
    }

    Vue.use(VueLazyload)
  }
}

vueUse(VuePlugin)

export default VuePlugin
