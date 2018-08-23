<template>
  <div class="custom-control custom-radio" v-bind:class="[inlineClass, {disabled: disabled}]">
    <input v-bind:id="cbId"
           class="custom-control-input"
           type="radio"
           v-bind:disabled="disabled"
           v-bind:value="name"
           v-model="model" />
    <label v-bind:for="cbId" class="custom-control-label">
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  name: "a-radio",
  props: {
    name: {
      type: [String, Number],
      description: "Radio label"
    },
    disabled: {
      type: Boolean,
      description: "Whether radio is disabled"
    },
    value: {
      type: [String, Boolean],
      description: "Radio value"
    },
    inline: {
      type: Boolean,
      description: "Whether radio is inline"
    }
  },
  data() {
    return {
      cbId: ""
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
      return "";
    }
  },
  created() {
    this.cbId = Math.random()
      .toString(16)
      .slice(2);
  }
};
</script>
