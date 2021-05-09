<template>
  <div id="loginPage">
    <main>
      <header>
        Right side
      </header>

      <div id="logoContainer">
        <bird-logo></bird-logo>
      </div>
    </main>

    <footer>
      <nav>
        <a href="#">About</a>
        <a href="#">Help Center</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Ads info</a>
        <a href="#">Blog</a>
        <a href="#">Status</a>
        <a href="#">Careers</a>
        <a href="#">Brand Resources</a>
        <a href="#">Advertising</a>
        <a href="#">Marketing</a>
        <a href="#">Twitter for Business</a>
        <a href="#">Developers</a>
        <a href="#">Directory</a>
        <a href="#">Settings</a>
        <span>&copy; 2021 Twitter, Inc.</span>
      </nav>
    </footer>
  </div>
</template>

<script>
import BirdLogo from '../components/BirdLogo';

export default {
  name: 'LoginPage',
  components: { BirdLogo }
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

  header, #logoContainer {
    flex-basis: 0;
  }

  header {
    flex-grow: 1
  }

  #logoContainer {
    flex-grow: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #logoContainer {
    background-image: url('../assets/login_background.png');
    background-size: cover;
    background-position: center center;
  }

  #loginPage footer {
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