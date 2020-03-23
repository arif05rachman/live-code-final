import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from 'axios'
Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  baseURL: "http://localhost:3000"
})

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
