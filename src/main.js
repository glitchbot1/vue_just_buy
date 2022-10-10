// import {createApp, h} from 'vue'
import App from './App.vue'
import store from './vuex/store'
import Vue from 'vue';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
}).$mount('#app')
