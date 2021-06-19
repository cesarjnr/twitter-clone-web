<template>
  <div id="signUpModal">
    <div id="modalBox">
      <div id="modalBoxTitleBar">
        <div class="modalBoxTitleBarContent">
          <bird-logo height="2rem" color="rgba(217, 217 ,217 ,1.00)" />
        </div>

        <div class="modalBoxTitleBarContent">
          <rounded-button
            text="Next"
            padding="0 15px"
            disabled
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BirdLogo from '../../../components/BirdLogo.vue';
import RoundedButton from '../../../components/RoundedButton';

export default {
  name: 'SignUpModal',
  components: { BirdLogo, RoundedButton }
}
</script>

<style scoped>
  #signUpModal {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(91, 112, 131, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #modalBox {
    min-height: 400px;
    max-height: 90vh;
    min-width: 600px;
    max-width: 80vw;
    background-color: rgb(0, 0, 0);
    border-radius: 16px;
  }

  #modalBoxTitleBar {
    padding: 10px 16px;
    display: flex;
  }

  .modalBoxTitleBarContent {
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
</style>
