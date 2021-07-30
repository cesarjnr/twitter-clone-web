<template>
  <div class="animated-input" :class="{ 'on-animated-input-focus': isFocused }">
    <label :class="{ 'on-label-focus': isFocused }">{{ label }}</label>

    <div class="input-container">
      <input
        type="text"
        @focus="handleFocus"
        @focusout="handleFocusOut"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedInput',
  data() {
    return {
      isFocused: false
    }
  },
  props: {
    label: String
  },
  methods: {
    handleFocus() {
      this.isFocused = true;
    },
    handleFocusOut() {
      this.isFocused = false;
    }
  }
}
</script>

<style scoped>
  .animated-input {
    border-radius: 4px;
    position: relative;
    border: 1px solid rgb(47, 51, 54);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  .on-animated-input-focus {
    box-shadow: rgb(29, 161, 242) 0 0 0 1px;
    border-color: rgb(29, 161, 242);
  }

  label {
    position: absolute;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 16px;
    color: rgb(110, 118, 125);
    font-size: 17px;
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
                font-size 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
                padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  .on-label-focus {
    color: rgb(29, 161, 242);
    font-size: small;
    padding-top: 8px;
  }

  .input-container {
    padding: 28px 8px 8px 8px;
  }

  input {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    font-size: 17px;
    width: 100%;
  }

  :focus-visible {
    outline: 0;
  }

  input:focus-visible {
    outline-offset: 0;
  }
</style>
