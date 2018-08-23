<template>
  <div class="custom-control custom-checkbox"
       v-bind:class="[{disabled: disabled}, inlineClass]">
    <input v-bind:id="cbId"
           class="custom-control-input"
           type="checkbox"
           v-bind:disabled="disabled"
           v-model="model"/>
    <label v-bind:for="cbId" class="custom-control-label">
      <slot>
        <span v-if="inline">&nbsp;</span>
      </slot>
    </label>
  </div>
</template>
<script>
export default {
  name: "a-checkbox",
  model: {
    prop: "checked"
  },
  props: {
    checked: {
      type: [Array, Boolean],
      description: "Whether checkbox is checked"
    },
    disabled: {
      type: Boolean,
      description: "Whether checkbox is disabled"
    },
    inline: {
      type: Boolean,
      description: "Whether checkbox is inline"
    }
  },
  data() {
    return {
      cbId: "",
      touched: false
    };
  },
  computed: {
    model: {
      get() {
        return this.checked;
      },
      set(check) {
        if (!this.touched) {
          this.touched = true;
        }
        this.$emit("input", check);
      }
    },
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
    }
  },
  created() {
    this.cbId = Math.random()
      .toString(16)
      .slice(2);
  }
};
</script>
