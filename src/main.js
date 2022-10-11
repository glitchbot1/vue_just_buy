// import {createApp, h} from 'vue'
import App from './App.vue'
import store from './vuex/store'



import { createApp} from 'vue'

const app = createApp(App)

app.use(store)
app.mount('#app')