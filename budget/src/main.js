import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.use(messagePlugin)
Vue.component('Loader', Loader)
Vue.filter('currensy', currencyFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyAZGTlc_DMIRKAWJkonb5m3cZsEsoRuaSU',
  authDomain: 'budget-60ce7.firebaseapp.com',
  databaseURL: 'https://budget-60ce7.firebaseio.com',
  projectId: 'budget-60ce7',
  storageBucket: 'budget-60ce7.appspot.com',
  messagingSenderId: '72503428445',
  appId: '1:72503428445:web:766f89d94ed417a22b14b4',
  measurementId: 'G-6233X0P742'
})

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
