<template>
  <a
    href="#"
    :style="customStyle"
  >
    <span>
      {{ text }}
    </span>
  </a>
</template>

<script>
export default {
  name: 'RoundedButton',
  props: {
    text: {
      type: String,
      required: true
    },
    customStyle: Object
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    max-width: 380px;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    border-radius: 9999px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    background-color: rgb(29, 161, 242);
  }
</style>
