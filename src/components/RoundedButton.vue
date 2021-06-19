<template>
  <div
    class="roundedButtonComponent"
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
        ['blueButton', { blueButton: true }],
        ['blackButton', { blackButton: true }]
      ]);
      const selectedClass = classesMap.get(this.buttonStyle);

      if (this.disabled) {
        selectedClass.disabledStyle = true;
      }

      console.log(selectedClass);

      return selectedClass;
    }
  }
}
</script>

<style scoped>
  .roundedButtonComponent {
    max-width: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }

  .blueButton {
    color: rgb(255, 255, 255);
    background-color: rgb(29, 161, 242);
  }

  .blueButton:hover {
    background-color: rgb(26, 145, 218);
  }

  .blackButton {
    color: rgb(29, 161, 242);
    background-color: rgb(0, 0, 0);
    border: 1px solid rgb(29, 161, 242);
  }

  .blackButton:hover {
    background-color: rgb(29, 161, 242, 0.1);
  }

  .blueButton, .blackButton {
    transition-duration: 0.2s;
  }

  .disabledStyle {
    opacity: 0.5;
    pointer-events: none;
  }
</style>
