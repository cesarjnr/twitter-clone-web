<template>
  <div
    class="animated-input"
    :class="{ 'animated-input-blue-border': isFocused }"
  >
    <label :class="{
      'blue-label': isFocused,
      'shrinked-label': shouldApplyShrinkedLabelClass
      }">
      {{ label }}
    </label>

    <div v-if="type === 'text'"  class="text-input-container">
      <span v-if="shouldRenderInputLength" class="input-length">
        {{ currentLength }} / {{ maxLength }}
      </span>

      <input
        type="text"
        :maxlength="maxLength"
        @focus="handleFocus"
        @focusout="handleFocusOut"
        @input="handleChange"
      />
    </div>

      <div v-if="type === 'select'" class="select-input-container">
        <select @focus="handleFocus" @focusout="handleFocusOut">
          <option disabled selected></option>
          <option value="test">Test 1</option>
          <option value="test">Test 2</option>
          <option value="test">Test 3</option>
        </select>

        <div class="arrow-down-icon-container">
          <arrow-down-icon :color="isFocused ? 'rgb(29, 161, 242)' : undefined" />
        </div>
      </div>
  </div>
</template>

<script>
import ArrowDownIcon from './ArrowDownIcon.vue';

export default {
  name: 'AnimatedInput',
  components: { ArrowDownIcon },
  data() {
    return {
      isFocused: false,
      currentLength: 0
    }
  },
  props: {
    type: String,
    label: String,
    maxLength: Number
  },
  methods: {
    handleFocus() {
      this.isFocused = true;
    },
    handleFocusOut() {
      this.isFocused = false;
    },
    handleChange(event) {
      this.currentLength = event.target.value.length;
    }
  },
  computed: {
    shouldApplyShrinkedLabelClass() {
      return this.isFocused || this.currentLength > 0 || this.type === 'select';
    },
    shouldRenderInputLength() {
      return this.type === 'text' && this.maxLength && this.isFocused;
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

  .animated-input-text-cursor {
    cursor: text;
  }

  .animated-input-pointer-cursor {
    cursor: pointer;
  }

  .animated-input-blue-border {
    box-shadow: rgb(29, 161, 242) 0 0 0 1px;
    border-color: rgb(29, 161, 242);
  }

  label {
    position: absolute;
    left: 8px;
    top: 18px;
    color: rgb(110, 118, 125);
    font-size: 17px;
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
                font-size 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
                top 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  .blue-label {
    color: rgb(29, 161, 242);
  }

  .shrinked-label {
    font-size: small;
    top: 8px;
  }

  input, select {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    font-size: 17px;
    width: 100%;
    padding: 12px 8px 8px 8px;
    margin-top: 16px;
  }

  select {
    cursor: pointer;
    appearance: none;
  }

  :focus-visible {
    outline: 0;
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

  .select-input-container {
    position: relative;
  }

  option {
    background-color: rgba(0,0,0,1.00)
  }

  .arrow-down-icon-container {
    position: absolute;
    top: 16px;
    right: 12px;
    pointer-events: none;
  }
</style>
