<template>
  <header>
    <div class="header-logo-container">
      <bird-logo height="3rem" color="rgba(217, 217 ,217 ,1.00)" />
    </div>

    <h1>Happening now</h1>

    <h2>Join Twitter today.</h2>

    <div class="buttons-container">
      <router-link to="/i/flow/signup" class="sign-up-link">
        <div class="button-container">
          <rounded-button
            text="Sign up"
            margin="0 0 20px 0"
            padding="15px 0"
          />
        </div>
      </router-link>

      <div class="button-container">
        <rounded-button
          text="Log in"
          buttonStyle="blackButton"
          margin="0 0 20px 0"
          padding="15px 0"
        />
      </div>
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

  .header-logo-container {
    align-self: flex-start;
  }

  h1 {
    font-size: 64px;
    margin: 48px 0;
  }

  h2 {
    font-size: 31px;
    margin-bottom: 32px;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
  }

  .button-container {
    max-width: 380px;
  }

  .sign-up-link {
    text-decoration: none;
  }
</style>
