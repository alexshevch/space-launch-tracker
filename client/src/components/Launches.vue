<template>
  <div class="launches">
    <h1>{{ info }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <button id="btn" class="get-launches" v-on:click="getLaunches">Get Launches</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Launches',
  props: {
    info: String
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
