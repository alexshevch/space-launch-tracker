import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'

Vue.use(VueRouter)
Vue.use(VueParticles)

Vue.config.productionTip = false

import Launches from './components/Launches.vue';
import Launch from './components/Launch.vue';

const router = new VueRouter({
  routes: [
    { path: '/', component: Launches },
    { path: '/launch/:id', component: Launch }
  ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')