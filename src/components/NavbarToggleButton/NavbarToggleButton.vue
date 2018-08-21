<template>
    <button class="navbar-toggler" type="button"
            data-toggle="collapse"
            v-bind:data-target="target"
            v-bind:aria-controls="target"
            v-bind:aria-expanded="toggled"
            aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
</template>
<script>
export default {
  name: 'a-navbar-toggle-button',
  props: {
    target: {
      type: [String, Number],
      description: "Button target element"
    },
    toggled: {
      type: Boolean,
      default: false,
      description: "Whether button is toggled"
    }
  }
};
</script>
<style>
</style>
