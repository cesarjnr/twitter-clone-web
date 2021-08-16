<template>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      :style="{ fill: color }"
      d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'ArrowDownIcon',
  props: {
    color: {
      type: String,
      default: 'rgb(110, 118, 125)'
    }
  }
}
</script>

<style scoped>
  svg {
    height: 1.5em;
  }
</style>
