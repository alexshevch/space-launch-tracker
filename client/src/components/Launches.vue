<template>
  <div class="launches" v-if="isLoaded">
    <h1>/ Upcoming Launches \</h1>
    <ul class="launch" v-for="launch in launches" :key="launch.id">
      <li>
          <router-link :to="`/launch/${launch.id}`">
            <span class="name">{{ launch.name.split("|")[0] }}</span>
            <br>
            <span class="time">{{ moment(launch.time).format('LL') }}</span>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    import axios from "axios";
    import moment from "moment";

    export default {
    name: "Launches",
    data() {
        return {
        isLoaded: false,
        moment
        };
    },
    methods: {},
    mounted() {
        axios.get("http://localhost:3000/launches").then(res => {
        this.launches = res.data;
        this.isLoaded = true;
        });
    }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 0;
        font-size: 28px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    span.name {
        font-size: 18px;
        font-weight: bold;
    }
    .launch {
        border-left: 2px solid #2c3e50;
        border-right: 2px solid #2c3e50;
        border-top: 2px solid #FFF;
        border-bottom: 2px solid #FFF;
        border-radius: 2px;
        width: 300px;
        margin: 10px auto;
        cursor: pointer;
    }
    .launch:hover {
        border: 2px solid #42b983;
    }
</style>
