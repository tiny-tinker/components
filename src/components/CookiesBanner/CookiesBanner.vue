<template>
  <div v-if="active" class="position-relative">
    <transition name="fade">
      <a-card v-if="show && !showRevoked" body-classes="d-flex" class="cookies-banner bg-dark text-white">
        <div class="left-side">
          We use cookies to track your usage of this site. We also share information about your usage with third-party services to help improve your experience. We will never track you without your permission.
        </div>
        <div class="right-side">
          <a-button type="primary" @click="allowAllCookies">Allow all cookies</a-button>
        </div>
      </a-card>
    </transition>
    <transition name="fade">
      <a-card class="cookies-banner bg-dark text-white" v-if="showThanks">
        Thanks! 🎉 You can always revoke your consent at the bottom of the page.
      </a-card>
    </transition>
    <transition name="fade">
      <a-card class="cookies-banner bg-dark text-white" v-if="showRevoked">
        Your consent has been revoked. We won't track you any longer.
      </a-card>
    </transition>
    <a-card v-if="!show" class="revoke-banner bg-dark text-white">
      Thanks for letting us use cookies! <a href="javascript:void(0)" @click="revokeConsent">Revoke your consent.</a>
    </a-card>
  </div>
</template>

<script>
export default {
  props: ['forceActive'],
  data() {
    return {
      active: this.forceActive,
      show: false,
      showThanks: false,
      showRevoked: false
    }
  },
  methods: {
    checkRevoke() {
      if (window.location.search === "?revoked=true") {
        this.onRevoke();
      }
    },
    allowAllCookies() {
      this.show = false;
      this.showThanks = true;
      setTimeout(() => {
        this.showThanks = false
      }, 3000);
      const expiry = new Date();
      expiry.setFullYear(expiry.getFullYear() + 1);
      document.cookie = `cookie-consent-received=true;expires=${expiry.toGMTString()}`
      this.$emit('cookie-consent-received');
    },
    revokeConsent() {
      this.clearAllCookies();
      window.location.search = "?revoked=true";
    },
    onRevoke() {
      window.scrollTo(0, document.body.scrollHeight);

      this.show = true;
      this.showRevoked = true;

      setTimeout(() => {
        this.showRevoked = false;
      }, 3000);

      this.$emit('cookie-consent-revoked');
    },
    clearAllCookies() {
      document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    }
  },
  mounted() {
    const consent = document.cookie.split(';').find((item) => {
      return item.includes('cookie-consent-received=true');
    });

    this.checkRevoke();

    if (!consent) {
      this.show = true;
    } else {
      this.$emit('cookie-consent-received');
    }
  }
}
</script>

<style scoped>
.cookies-banner {
  display: flex;
  position: fixed;
  z-index: 200;
  bottom: 0;
  left: 0;
  width: 100%;
}

.left-side {
  line-height: 1.8em;
  padding: 0.25em;
}

.right-side {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.revoke-banner {
  text-align: center;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
