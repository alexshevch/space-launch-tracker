<template>
    <div>
        <h1>/__ Launch Details ___\</h1>
        <div class="launch">
            <p>Name: {{launch.name}}</p>
            <p>Agency: {{launch.agency}}</p>
            <p>Location: {{launch.location}}</p>
            <p>Time: {{launch.time}}</p>
            <p v-if="launch.wikis.rocket"><a class="wikiUrl" :href="launch.wikis.rocket">Rocket information on Wikipedia</a></p>
            <p v-if="launch.wikis.agency"><a class="wikiUrl" :href="launch.wikis.agency">Agency information on Wikipedia</a></p>
            <p v-if="launch.wikis.location"><a class="wikiUrl" :href="launch.wikis.location">Location information on Wikipedia</a></p>
        </div>
         <router-link to="/">Back<br>/-|-\</router-link>
    </div>
</template>

<script>
    import axios from "axios";
    import moment from "moment";

    export default {
    name: "Launch",
    data() {
        return {
        isLoaded: false,
        moment,
        launchId: this.$route.params.id,
        launch: { wikis: {}}
        };
    },
    methods: {},
    mounted() {
        axios.get(`http://localhost:3000/launches/${this.launchId}`).then(res => {
        this.launch = res.data;
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
    .launch {
        text-align: left;
        width: 300px;
        margin: 10px auto;
        padding: 4px;
        border-left: 2px solid #2c3e50;
        border-right: 2px solid #2c3e50;
    }
    a.wikiUrl {
        text-decoration: underline;
    }
</style>
