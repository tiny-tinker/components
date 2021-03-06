<template>
    <nav class="navbar"
         v-bind:class="[
            {'navbar-expand-lg': expand},
            {[`navbar-${effect}`]: effect},
            {'navbar-transparent': transparent},
            {[`bg-${type}`]: type},
            {'rounded': round}
         ]">
        <div class="container">
            <slot name="container-pre"></slot>
            <slot name="brand">
                <a class="navbar-brand" href="#" @click.prevent="onTitleClick">
                    {{title}}
                    <img v-if="logo" :src="logo" alt="asyncy logo"/>
                    <div v-if="isBeta" style="margin-left: 0.5rem; float:right">
                      <a-badge type="primary">Beta</a-badge>
                    </div>
                </a>
            </slot>
            <a-navbar-toggle-button :toggled="toggled"
                                  :target="contentId"
                                  @click.native.stop="toggled = !toggled">
            </a-navbar-toggle-button>

            <slot name="container-after"></slot>

            <div class="collapse navbar-collapse" v-bind:class="{show: toggled}" v-bind:id="contentId" v-click-outside="closeMenu">
                <div class="navbar-collapse-header">
                    <slot name="content-header" v-bind:close-menu="closeMenu"></slot>
                </div>
                <slot v-bind:close-menu="closeMenu"></slot>
            </div>
        </div>
    </nav>
</template>
<script>
import aNavbarToggleButton from "../NavbarToggleButton/NavbarToggleButton.vue";

export default {
  name: "a-nav",
  components: {
    aNavbarToggleButton
  },
  props: {
    type: {
      type: String,
      default: "primary",
      description: "Navbar type (e.g default, primary etc)"
    },
    title: {
      type: String,
      default: "",
      description: "Title of navbar"
    },
    logo: {
      type: String,
      default: null,
      description: "Logo of navbar"
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description:
        "Explicit id for the menu. By default it's a generated random number"
    },
    effect: {
      type: String,
      default: "dark",
      description: "Effect of the navbar (light|dark)"
    },
    round: {
      type: Boolean,
      default: false,
      description: "Whether nav has rounded corners"
    },
    transparent: {
      type: Boolean,
      default: false,
      description: "Whether navbar is transparent"
    },
    expand: {
      type: Boolean,
      default: false,
      description: "Whether navbar should contain `navbar-expand-lg` class"
    },
    isBeta: {
      type: Boolean,
      default: false,
      description: "Whether navbar should show `beta` badge"
    }
  },
  data() {
    return {
      toggled: false
    };
  },
  methods: {
    onTitleClick(evt) {
      this.$emit("title-click", evt);
    },
    closeMenu() {
      this.toggled = false;
    }
  }
};
</script>
<style>
</style>
