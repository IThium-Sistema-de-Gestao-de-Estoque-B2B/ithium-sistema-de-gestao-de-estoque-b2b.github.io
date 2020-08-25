import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import router from './router'
import store from './store'
import http from './http/index'

Vue.config.productionTip = false

// Prototypes
Vue.prototype.$http = http

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
