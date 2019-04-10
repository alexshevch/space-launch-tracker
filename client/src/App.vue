<template>
  <div id="app">
    <img class="logo" alt="Inverted Vue logo" src="./assets/logo.png">
      <p class="rocket-top">/_______________________\</p>
      <p class="rocket-top">/_________________________\</p>
      <p class="rocket-top">/___________________________\</p>
      <p class="rocket-top">/_____________________________\</p>
    <Launches />
  </div>
</template>

<script>
import Launches from './components/Launches.vue'
export default {
  name: 'app',
  components: {
    Launches
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .logo {
        width: 192px;
    }
    .rocket-top {
        margin: 0;
        font-size: 18px;
    }
</style>
