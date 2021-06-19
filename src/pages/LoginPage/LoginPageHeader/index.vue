<template>
  <header>
    <div id="headerLogoContainer">
      <bird-logo height="3rem" color="rgba(217, 217 ,217 ,1.00)" />
    </div>

    <h1>Hapenning now</h1>

    <h2>Join Twitter today.</h2>

    <div id="buttonsContainer">
      <router-link to="/i/flow/signup" id="signUpLink">
        <rounded-button
          text="Sign up"
          margin="0 0 20px 0"
          padding="15px 0"
        />
      </router-link>

      <rounded-button
        text="Log in"
        buttonStyle="blackButton"
        margin="0 0 20px 0"
        padding="15px 0"
      />
    </div>
  </header>
</template>

<script>
import BirdLogo from '../../../components/BirdLogo';
import RoundedButton from '../../../components/RoundedButton';

export default {
  name: 'LoginPageHeader',
  components: { BirdLogo, RoundedButton }
}
</script>

<style scoped>
  header {
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px;
    color: rgba(217, 217 ,217 ,1.00);
    font-family: TwitterChirpExtendedHeavy, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  #headerLogoContainer {
    align-self: flex-start;
  }

  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 31px;
  }

  #buttonsContainer {
    display: flex;
    flex-direction: column;
  }

  #signUpLink {
    text-decoration: none;
  }
</style>
