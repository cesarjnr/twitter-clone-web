<template>
  <main id="loginPageMain">
    <bird-logo />
  </main>
</template>

<script>
import BirdLogo from '../../../components/BirdLogo';

export default {
  name: 'LoginPageMain',
  components: { BirdLogo }
}
</script>

<style scoped>
  #loginPageMain {
    flex-basis: 0;
    flex-grow: 1.3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../../assets/login_background.png');
    background-size: cover;
    background-position: center center;
  }
</style>
