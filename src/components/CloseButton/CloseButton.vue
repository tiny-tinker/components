<template>
    <button type="button" class="navbar-toggler"
            data-toggle="collapse"
            @click="handleClick"
            v-bind:data-target="`#${target}`"
            v-bind:aria-controls="target"
            v-bind:aria-expanded="expanded"
            aria-label="Toggle navigation">
        <span></span>
        <span></span>
    </button>
</template>
<script>
export default {
  name: "a-close-button",
  props: {
    target: {
      type: [String, Number],
      description: "Close button target element"
    },
    expanded: {
      type: Boolean,
      description: "Whether button is expanded (aria-expanded attribute)"
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style>
</style>
