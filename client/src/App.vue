<template>
  <div id="app">
    <vue-particles color="#2c3e50"
        :particleOpacity="0.4"
        :particlesNumber="30"
        shapeType="circle"
        :particleSize="3"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"></vue-particles>
    <img class="logo" alt="Inverted Vue logo" src="./assets/logo.png">
    <p class="rocket-top">/_______________________\</p>
    <p class="rocket-top">/_________________________\</p>
    <p class="rocket-top">/___________________________\</p>
    <p class="rocket-top">/_____________________________\</p>
    <Launches />
  </div>
</template>

<script>
import Launches from './components/Launches.vue';

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
    #particles-js { position: absolute; background-size: cover; top: 0; bottom: 0; left: 0; right: 0; overflow-y: hidden; z-index: -1; }
</style>
