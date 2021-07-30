<template>
  <div
    class="rounded-button-component"
    :style="{ margin, padding }"
    :class="getClass"
  >
    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'RoundedButton',
  props: {
    text: {
      type: String,
      required: true
    },
    buttonStyle: {
      type: String,
      default: 'blueButton'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    margin: String,
    padding: String,
  },
  computed: {
    getClass() {
      const classesMap = new Map([
        ['blueButton', { 'blue-button': true }],
        ['blackButton', { 'black-button': true }]
      ]);
      const selectedClass = classesMap.get(this.buttonStyle);

      if (this.disabled) {
        selectedClass['disabled-style'] = true;
      }

      return selectedClass;
    }
  }
}
</script>

<style scoped>
  .rounded-button-component {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }

  .blue-button {
    color: rgb(255, 255, 255);
    background-color: rgb(29, 161, 242);
  }

  .blue-button:hover {
    background-color: rgb(26, 145, 218);
  }

  .black-button {
    color: rgb(29, 161, 242);
    background-color: rgb(0, 0, 0);
    border: 1px solid rgb(29, 161, 242);
  }

  .black-button:hover {
    background-color: rgb(29, 161, 242, 0.1);
  }

  .blue-button, .black-button {
    transition-duration: 0.2s;
  }

  .disabled-style {
    opacity: 0.5;
    pointer-events: none;
  }
</style>
