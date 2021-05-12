<template>
  <div id="loginPage">
    <div id="headerMainContainer">
      <login-page-header />
      <login-page-main />
    </div>
    <login-page-footer />
  </div>
</template>

<script>
import LoginPageHeader from './LoginPageHeader';
import LoginPageMain from './LoginPageMain';
import LoginPageFooter from './LoginPageFooter';

export default {
  name: 'LoginPage',
  components: { LoginPageHeader, LoginPageMain, LoginPageFooter }
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
