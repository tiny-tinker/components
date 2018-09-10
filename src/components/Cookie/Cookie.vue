<template>
  <transition appear name="fade">
    <div class="cookie" :class="containerPosition" v-if="isOpen">
      <div class="cookie__container">
        <div class="cookie__content">
          <slot name="content">We use cookies to ensure you get the best experience on our website. <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a></slot>
        </div>
        <div class="cookie__buttons">
          <a-button @click.native="ok">
            <slot name="btn-text">Got it!</slot>
          </a-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'a-cookie',
  props: {
    // bottom, top
    position: {
      type: String,
      default: 'bottom'
    }
  },
  data: () => ({
    status: null,
    isOpen: false
  }),
  computed: {
    containerPosition: function () {
      return `cookie--${this.position}`
    }
  },
  mounted: function () {
    this.init()
  },
  watch: {
    status: function (newValue) {
      this.setStatus(newValue)
      this.$emit('status', newValue)
      this.isOpen = !newValue
    },
    isOpen: function (newValue) {
      if (!newValue) {
        this.$emit('cookieAcknowledged')
      }
    }
  },
  methods: {
    init: function () {
      let acknowledged = this.getStatus()
      this.isOpen = !acknowledged
      this.status = acknowledged
    },
    setStatus: function (acknowledged) {
      localStorage.setItem('asyncy-cookie-law-prevent', acknowledged)
    },
    getStatus: function () {
      return localStorage.getItem('asyncy-cookie-law-prevent')
    },
    ok: function () {
      this.status = true
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie {
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 9999;
  width: 100%;
  background: #111;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 -4px 4px rgba(#111, 0.04);

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &--bottom {
    bottom: 0;
    left: 0;
    right: 0;
  }

  &--top {
    top: 0;
    left: 0;
    right: 0;
  }

  &__container {
    max-width: 1440px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 30px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__content {
    margin-right: 0;
    margin-bottom: 20px;
    font-size: 0.9rem;
    color: #fff;

    @media (min-width: 768px) {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }

  &__buttons {
    transition: all 0.2 ease;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      width: auto;
    }
  }
}
</style>
