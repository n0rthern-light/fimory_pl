import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCJz_upiqKAzaIIw0FR2uIyecnTAbpMjtw',
      authDomain: 'serwis-z-filmami.firebaseapp.com',
      databaseURL: 'https://serwis-z-filmami.firebaseio.com',
      projectId: 'serwis-z-filmami',
      storageBucket: ''
    })
  }
})
