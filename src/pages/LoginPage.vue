<template>
  <div id="loginPage">
    <main>
      <header>
        <div>Logo</div>
        <h1>Hapenning now</h1>
        <h2>Join Twitter today.</h2>
        <div>Form</div>
      </header>

      <div id="logoContainer">
        <bird-logo></bird-logo>
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
  components: { BirdLogo },
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

  header, #logoContainer {
    flex-basis: 0;
  }

  header {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px;
  }

  #logoContainer {
    flex-grow: 1.3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header h1 {
    font-size: 64px;
    font-family: TwitterChirpExtendedHeavy, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: rgba(217, 217 ,217 ,1.00);
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