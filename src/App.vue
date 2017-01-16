<template>
  <div id="app">
    <img src="./assets/logo.png">
    <img src="/static/bootstrap.png">
    <p>{{ msg }}</p>
    <button class="btn btn-danger">Bootstrap CSS is running...</button>
  </div>
</template>

<style>

  *:focus {
    outline: none !important;
  }

  @font-face {
    font-family: 'CompleteInHim';
    src: url('./assets/fonts/CompleteInHim.ttf')
  }

  #app {
    text-align: center;
  }

  p {
    font-family: 'CompleteInHim';
    font-size: 32px;
  }
  @import '../assets/bootstrap/css/bootstrap.min.css'
</style>

<script>
  export default {
    data () {
      return {
        msg: 'Vue Minimum Starter Kit'
      }
    }
  }
</script>
