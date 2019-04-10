<template>
  <div class="launches" v-if="isLoaded">
    <h1>Launches</h1>
      <div class="launch" v-for="launch in launches" :key="launch.id">
          {{ launch.name }} {{ launch.time }}
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Launches',
  data () {
  return {
    isLoaded: false
  }
},
  methods: {
  },
  mounted() {
      axios.get("http://localhost:3000/launches").then(res => {
          this.launches = res.data;
          this.isLoaded = true;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
