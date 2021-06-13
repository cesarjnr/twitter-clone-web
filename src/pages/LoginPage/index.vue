<template>
  <div id="loginPage">
    <div id="headerMainContainer">
      <login-page-header />
      <login-page-main />
    </div>
    <login-page-footer />

    <template v-if="isSignUpRoute">
      <login-page-sign-up />
    </template>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

import LoginPageHeader from './LoginPageHeader';
import LoginPageMain from './LoginPageMain';
import LoginPageFooter from './LoginPageFooter';
import LoginPageSignUp from './LoginPageSignUp';

export default {
  name: 'LoginPage',
  components: {
    LoginPageHeader,
    LoginPageMain,
    LoginPageFooter,
    LoginPageSignUp
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
  #loginPage {
    background-color: rgb(0, 0, 0);
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #headerMainContainer {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
  }
</style>
