<template>
  <div id="loginPage">
    <main>
      <header>
        <div id="rightSideLogoContainer">
          <bird-logo height="3rem" color="rgba(217, 217 ,217 ,1.00)" />
        </div>

        <h1>Hapenning now</h1>

        <h2>Join Twitter today.</h2>

        <div id="buttonsContainer">
          <rounded-button
            text="Sign up"
            :customStyle="{ margin: '0 0 20px 0' }"
          />
          <rounded-button
            text="Log in"
            :customStyle="{
              color: 'rgb(29, 161, 242)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              margin: '0 0 20px 0',
              border: '1px solid rgb(29, 161, 242)'
            }"
          />
        </div>
      </header>

      <div id="leftSideLogoContainer">
        <bird-logo />
      </div>
    </main>

    <footer>
      <nav>
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
        >
          {{ link.label }}
        </a>

        <span>&copy; 2021 Twitter, Inc.</span>
      </nav>
    </footer>
  </div>
</template>

<script>
import BirdLogo from '../components/BirdLogo';
import RoundedButton from '../components/RoundedButton';

const links = [
  { url: '#', label: 'About' },
  { url: '#', label: 'Help Center' },
  { url: '#', label: 'Terms of Service' },
  { url: '#', label: 'Privacy Policy' },
  { url: '#', label: 'Cookie Policy' },
  { url: '#', label: 'Ads info' },
  { url: '#', label: 'Blog' },
  { url: '#', label: 'Status' },
  { url: '#', label: 'Careers' },
  { url: '#', label: 'Brand Resources' },
  { url: '#', label: 'Advertising' },
  { url: '#', label: 'Marketing' },
  { url: '#', label: 'Twitter for Business' },
  { url: '#', label: 'Developers' },
  { url: '#', label: 'Directory' },
  { url: '#', label: 'Settings' }
];

export default {
  name: 'LoginPage',
  components: { BirdLogo, RoundedButton },
  data: () => ({ links })
}
</script>

<style scoped>
  #loginPage {
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  main {
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
  }

  main header {
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px;
    color: rgba(217, 217 ,217 ,1.00);
    font-family: TwitterChirpExtendedHeavy, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  main header #rightSideLogoContainer {
    align-self: flex-start;
  }

  main header h1 {
    font-size: 64px;
  }

  main header h2 {
    font-size: 31px;
  }

  main header #buttonsContainer {
    display: flex;
    flex-direction: column;
  }

  main #leftSideLogoContainer {
    flex-basis: 0;
    flex-grow: 1.3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/login_background.png');
    background-size: cover;
    background-position: center center;
  }

  footer {
    padding: 12px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer nav a, footer nav span {
    margin: 4px 0;
    padding-right: 16px;
    color: rgb(110, 118, 125);
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  footer nav a {
    text-decoration: none;
  }

  footer nav a:hover {
    text-decoration: underline;
  }
</style>
