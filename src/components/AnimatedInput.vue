<template>
  <div class="animated-input" :class="{ 'animated-input-blue-border': isFocused }">
    <label
      :class="{
        'blue-label': isFocused,
        'small-label': shouldCompressInputLabel
      }"
    >
      {{ label }}
    </label>

    <span v-if="shouldRenderInputLength" class="input-length">
      {{ inputCurrentLength }} / {{ inputMaxLength }}
    </span>

    <div class="input-container">
      <input
        type="text"
        :maxlength="inputMaxLength"
        @focus="handleFocus"
        @focusout="handleFocusOut"
        @input="handleChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedInput',
  data() {
    return {
      isFocused: false,
      inputCurrentLength: 0
    }
  },
  props: {
    label: String,
    inputMaxLength: Number
  },
  methods: {
    handleFocus() {
      this.isFocused = true;
    },
    handleFocusOut() {
      this.isFocused = false;
    },
    handleChange(event) {
      this.inputCurrentLength = event.target.value.length;
    }
  },
  computed: {
    shouldRenderInputLength() {
      return this.inputMaxLength && this.isFocused;
    },
    shouldCompressInputLabel() {
      return this.isFocused || this.inputCurrentLength > 0;
    }
  }
}
</script>

<style scoped>
  .animated-input {
    border-radius: 4px;
    position: relative;
    border: 1px solid rgb(47, 51, 54);
    font-family:  -apple-system,
                  BlinkMacSystemFont,
                  "Segoe UI",
                  Roboto,
                  Helvetica,
                  Arial,
                  sans-serif;
  }

  .animated-input-blue-border {
    box-shadow: rgb(29, 161, 242) 0 0 0 1px;
    border-color: rgb(29, 161, 242);
  }

  label {
    position: absolute;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 20px;
    color: rgb(110, 118, 125);
    font-size: 17px;
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
                font-size 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
                padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  .blue-label {
    color: rgb(29, 161, 242);
  }

  .small-label {
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

  .input-length {
    position: absolute;
    top: 8px;
    right: 8px;
    color: rgb(110, 118, 125);
    font-size: 13px;
    font-family:  TwitterChirp,
                  -apple-system,
                  BlinkMacSystemFont,
                  "Segoe UI",
                  Roboto,
                  Helvetica,
                  Arial,
                  sans-serif;
  }
</style>
