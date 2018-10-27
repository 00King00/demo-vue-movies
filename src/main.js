import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


Vue.config.productionTip = false

import './assets/css/util.css'
import './assets/css/main.css'
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
