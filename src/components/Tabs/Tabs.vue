<template>
  <component v-bind:is="layoutComponent">
    <template slot="nav">
      <div class="nav-wrapper">
        <ul class="nav"
            role="tablist"
            ref="tabsContainer"
            v-bind:class="
            [type ? `nav-pills-${type}`: '',
              tabShape ? `nav-${tabShape}`: '',
             {'nav-pills-icons': icons},
             {'nav-fill': fill},
             {'nav-center': center},
             {'nav-pills-circle': circle},
             {'justify-content-center': centered},
             tabNavClasses
            ]">

          <li v-for="tab in tabs"
              class="nav-item"
              ref="tabs"
              v-bind:key="tab.id || tab.title">

            <a data-toggle="tab"
               role="tab"
               class="nav-link"
               v-bind:href="`#${tab.id || tab.title}`"
               @click.prevent="activateTab(tab)"
               v-bind:aria-selected="tab.active"
               v-bind:class="[
                {active: tab.active},
                {'nav-link-bold': bold},
                tabNavLinkClasses
               ]">
              <tab-item-content :tab="tab">
              </tab-item-content>
            </a>

          </li>

          <div v-if="tabShape==='links'" 
               class="border-decorator-container" 
               :style="{ 
                 width: tabDecoratorWidth, 
                 marginLeft: tabDecoratorMargin 
                }">
            <div class="border-decorator"></div>
          </div>

        </ul>
      </div>
    </template>

    <div slot="content" class="tab-content"
         v-bind:class="[tabContentClasses]">
      <slot v-bind="slotData"></slot>
    </div>
  </component>
</template>

<script>
import PillsLayout from "./PillsLayout.vue";
import TabsLayout from "./TabsLayout.vue";

export default {
  name: "a-tabs",
  components: {
    TabsLayout,
    PillsLayout,
    TabItemContent: {
      props: ["tab"],
      render(h) {
        return h("div", [this.tab.$slots.title || this.tab.title]);
      }
    }
  },
  props: {
    type: {
      type: String,
      default: "",
      validator: value => {
        let acceptedValues = [
          "",
          "primary",
          "info",
          "success",
          "warning",
          "danger"
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: "Tabs type (primary|info|danger|default|warning|success)"
    },
    tabShape: {
      type: String,
      default: 'pills',
      description: "Tabs shape (pills|tabs|links|icon-only)"
    },
    circle: {
      type: Boolean,
      default: false,
      description: "Whether tabs are circle"
    },
    fill: {
      type: Boolean,
      default: false,
      description: "Whether to fill each tab"
    },
    center: {
      type: Boolean,
      default: false,
      description: "Whether to center the tabs"
    },
    bold: {
      type: Boolean,
      default: false,
      description: "Whether tab letters are bold"
    },
    activeTab: {
      type: String,
      default: "",
      description: "Default active tab name"
    },
    tabNavWrapperClasses: {
      type: [String, Object],
      default: "",
      description: "Tab Nav wrapper (div) css classes"
    },
    tabNavClasses: {
      type: [String, Object],
      default: "",
      description: "Tab Nav (ul) css classes"
    },
    tabNavLinkClasses: {
      type: [String, Object],
      default: "",
      description: "Tab Nav (a) css classes"
    },
    tabContentClasses: {
      type: [String, Object],
      default: "",
      description: "Tab content css classes"
    },
    icons: {
      type: Boolean,
      description: "Whether tabs should be of icon type (small no text)"
    },
    centered: {
      type: Boolean,
      description: "Whether tabs are centered"
    },
    value: {
      type: String,
      description: "Initial value (active tab)"
    }
  },
  provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    };
  },
  data() {
    return {
      tabs: [],
      activeTabIndex: 0,
      tabsWidth:[], // store tabs width,
      tabsContainerWidth: 0, // store tabs container width(<ul>)
      tabsWidthSum: 0
    };
  },
  computed: {
    layoutComponent() {
      return this.pills ? "pills-layout" : "tabs-layout";
    },
    slotData() {
      return {
        activeTabIndex: this.activeTabIndex,
        tabs: this.tabs
      };
    },
    /* For border-bottom decorate in "links" shaped tab */
    tabDecoratorWidth: function() {      
      if (this.tabsWidth.length > 0) {

        // If tabs are overriding it's container - hide decoration
        if (this.tabsWidthSum > this.tabsContainerWidth) {
          return '0';
        } else {
          return this.tabsWidth[this.activeTabIndex] + 'px';
        }
      } else {
        return '0';
      }
    },
    tabDecoratorMargin: function() {
      if (this.tabsWidth.length > 0) {

        
        let margin = (this.tabsContainerWidth - this.tabsWidthSum) / 2;
        /* sumup the tabs width before active tab */
        for (let i = 0; i < this.activeTabIndex; i ++) {
          margin += this.tabsWidth[i];
        }

        return margin + 'px';
      } 
      else {
        return '0';
      }
    }
  },
  methods: {
    findAndActivateTab(title) {
      let tabToActivate = this.tabs.find(t => t.title === title);
      if (tabToActivate) {
        this.activateTab(tabToActivate);
      }
    },
    activateTab(tab) {
      if (this.handleClick) {
        this.handleClick(tab);
      }
      this.deactivateTabs();
      tab.active = true;
      this.activeTabIndex = this.tabs.findIndex(t => t.active);
    },
    deactivateTabs() {
      this.tabs.forEach(tab => {
        tab.active = false;
      });
    },
    addTab(tab) {
      if (this.activeTab === tab.name) {
        tab.active = true;
      }
      this.tabs.push(tab);
    },
    removeTab(tab) {
      const tabs = this.tabs;
      const index = tabs.indexOf(tab);
      if (index > -1) {
        tabs.splice(index, 1);
      }
    },
    getTabsAndContainerWidth() {
      /**
       * get the tabs width & container width  - need this data for border-bottom 
       * decoration for "links" shaped 
       */
      this.tabsWidth = [];
      let sum = 0;
      for (let i = 0; i < this.$refs.tabs.length; i++) {
        this.tabsWidth.push(this.$refs.tabs[i].clientWidth);
        sum += this.$refs.tabs[i].clientWidth;
      }
      this.tabsWidthSum = sum;

      this.tabsContainerWidth = this.$refs.tabsContainer.clientWidth;
    },
    handleResize() {
      this.getTabsAndContainerWidth();
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.value) {
        this.findAndActivateTab(this.value);
      } else {
        if (this.tabs.length > 0) {
          this.activateTab(this.tabs[0]);
        }
      }

      // Calculate tabs & container width
      this.getTabsAndContainerWidth();

      // Handle Resize event to recalculate the size of tabs & container width
      window.addEventListener('resize', this.handleResize);
    });
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  watch: {
    value(newVal) {
      this.findAndActivateTab(newVal);
    }
  }
};
</script>
