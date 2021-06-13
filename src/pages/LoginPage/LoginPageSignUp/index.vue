<template>
  <div id="loginPageSignUp">
    <div id="signUpModal"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginPageSignUp'
}
</script>

<style scoped>
  #loginPageSignUp {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(91, 112, 131, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #signUpModal {
    min-height: 400px;
    max-height: 90vh;
    min-width: 600px;
    max-width: 80vw;
    background-color: rgb(0, 0, 0);
    border-radius: 16px;
  }
</style>
