<template>
  <div class="sign-up-modal">
    <div class="modal-container">
      <div class="modal-title-bar">
        <div class="modal-box-title-bar-content">
          <bird-logo height="2rem" color="rgba(217, 217 ,217 ,1.00)" />
        </div>
      </div>

      <div>
        <h2>Create your account</h2>
        <form>
          <div class="outside-input-container">
            <animated-input
              type="text"
              label="Name"
              :maxLength="50"
            />
          </div>

          <div class="outside-input-container">
            <animated-input type="text" label="Phone" />
          </div>

          <span class="switch-email-phone-link">Use email instead</span>

          <div class="date-of-birth-container">
            <h3>Date of birth</h3>
            <span class="date-of-birth-warning">
              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </span>
            <div class="date-of-birth-inputs">
              <div class="date-of-birth-input-container" style="flex-grow: 2;">
                <animated-input type="select" label="Month" />
              </div>
              <div class="date-of-birth-input-container" style="flex-grow: 1;">
                <animated-input type="select" label="Day" />
              </div>
              <div class="date-of-birth-input-container" style="flex-grow: 1;">
                <animated-input type="select" label="Year" />
              </div>
            </div>
          </div>

          <rounded-button
            text="Next"
            padding="10px 0"
            disabled
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BirdLogo from '../../../components/BirdLogo.vue';
import RoundedButton from '../../../components/RoundedButton';
import AnimatedInput from '../../../components/AnimatedInput.vue';

export default {
  name: 'SignUpModal',
  components: { BirdLogo, RoundedButton, AnimatedInput }
}
</script>

<style scoped>
  .sign-up-modal {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(91, 112, 131, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 20px;
  }

  .modal-container {
    min-height: 400px;
    max-height: 90vh;
    min-width: 600px;
    max-width: 600px;
    background-color: rgb(0, 0, 0);
    border-radius: 16px;
    padding: 10px 32px 36px 32px;
  }

  .modal-title-bar {
    margin-bottom: 10px;
    display: flex;
  }

  .modal-box-title-bar-content {
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .outside-input-container {
    margin: 12px 0;
  }

  .switch-email-phone-link {
    margin-top: 16px;
    color: rgb(27, 149, 224);
    font-size: 15px;
    cursor: pointer;
  }

  .switch-email-phone-link:hover {
    text-decoration: underline;
  }

  .date-of-birth-container {
    margin: 32px 0 80px 0;
  }

  .date-of-birth-warning {
    color: rgb(110, 118, 125);
    font-size: 15px;
  }

  .date-of-birth-inputs {
    display: flex;
    margin-top: 16px;
  }

  .date-of-birth-input-container {
    margin-right: 12px;
  }

  h3 {
    color: rgb(217, 217, 217);
    font-size: 15px;
  }

  h2 {
    margin: 16px 0;
  }

  .date-of-birth-warning {
    overflow-wrap: break-word;
  }
</style>
