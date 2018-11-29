import Vue from 'vue'
import '@/firebase'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import firebase from 'firebase/app'

Vue.config.productionTip = false

let app

firebase.auth().onAuthStateChanged((user) => {
  console.log(store.commit('auth/setUser', user))
  console.log(store.commit('auth/setIsAuthenticated', user !== null))
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
