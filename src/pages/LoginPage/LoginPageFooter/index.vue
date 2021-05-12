<template>
  <footer id="loginPageFooter">
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
</template>

<script>
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
  name: 'LoginPageFooter',
  data: () => ({ links })
}
</script>

<style scoped>
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
