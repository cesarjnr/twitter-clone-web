<template>
  <div
    id="roundedButtonComponent"
    :style="{ margin }"
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
    className: {
      type: String,
      default: 'blueButton'
    },
    margin: String
  },
  computed: {
    getClass() {
      if (this.className === 'blackButton') {
        return { blackButton: true, blackButtonHover: true };
      } else {
        return { blueButton: true, blueButtonHover: true };
      }
    }
  }
}
</script>

<style scoped>
  #roundedButtonComponent {
    max-width: 380px;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    border-radius: 9999px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 700;
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
</style>
