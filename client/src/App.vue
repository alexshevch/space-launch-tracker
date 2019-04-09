<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Launches />
  </div>
</template>

<script>
import axios from 'axios';

import Launches from './components/Launches.vue'
export default {
  name: 'app',
  components: {
    Launches
  },
    methods: {
    getLaunches: function () {
      axios.get("http://localhost:3000/launches")
      .then((response)  =>  {
        this.info = response;
      });
    }
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
</style>
