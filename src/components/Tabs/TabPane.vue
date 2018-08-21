<template>
  <div class="tab-pane fade"
       v-bind:id="id || label"
       v-bind:class="{'active show': active}"
       v-show="active"
       v-bind:aria-expanded="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "a-tab-pane",
  props: ["label", "id", "title"],
  inject: ["addTab", "removeTab"],
  data() {
    return {
      active: false
    };
  },
  mounted() {
    this.addTab(this);
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.removeTab(this);
  }
};
</script>
<style>
</style>
