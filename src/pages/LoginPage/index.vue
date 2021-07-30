<template>
  <div class="login-page">
    <div class="header-main-container">
      <login-page-header />
      <login-page-main />
    </div>
    <login-page-footer />

    <template v-if="isSignUpRoute">
      <sign-up-modal />
    </template>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

import LoginPageHeader from './LoginPageHeader';
import LoginPageMain from './LoginPageMain';
import LoginPageFooter from './LoginPageFooter';
import SignUpModal from './SignUpModal';

export default {
  name: 'LoginPage',
  components: {
    LoginPageHeader,
    LoginPageMain,
    LoginPageFooter,
    SignUpModal
  },
  computed: {
    isSignUpRoute: () => {
      const currentRoute = useRoute().path;

      return currentRoute === '/i/flow/signup';
    }
  }
}
</script>

<style scoped>
  .login-page {
    background-color: rgb(0, 0, 0);
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header-main-container {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
  }
</style>
