<template>
  <div id="app">
    <img src="./assets/logo.png">
    <img src="/static/bootstrap.png">
    <p>{{ msg }}</p>
    <p>{{ $t("home.hello") }}</p>
    <button class="btn btn-danger">Bootstrap CSS is running...</button>
  </div>
</template>

<style lang="scss">

  @import './styles/imports';

  *:focus {
    outline: none !important;
  }

  @font-face {
    font-family: 'CompleteInHim';
    src: url('./assets/fonts/CompleteInHim.ttf')
  }

  #app {
    text-align: center;
    p {
      font-family: 'CompleteInHim', serif;
      font-size: 32px;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        msg: 'Vue Minimum Starter Kit @Machine'
      }
    }
  }

</script>
