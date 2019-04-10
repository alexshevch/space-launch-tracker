<template>
    <h1>/__ Launch Details ___\</h1>
</template>

<script>
    import axios from "axios";
    import moment from "moment";

    export default {
    name: "Launch",
    data() {
        return {
        isLoaded: false,
        moment
        };
    },
    methods: {},
    mounted() {
        axios.get(`http://localhost:3000/launches/${this.$route.params.id}`).then(res => {
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
</style>
