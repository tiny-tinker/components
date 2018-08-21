import aTab from './Tab.vue'
import aTabPane from './TabPane.vue'
import aTabs from './Tabs.vue'
import aTabsLayout from './TabsLayout.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aTab,
  aTabPane,
  aTabs,
  aTabsLayout
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
