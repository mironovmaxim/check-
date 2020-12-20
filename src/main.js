import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Default from './layouts/Default.vue'
import Auth from './layouts/Auth.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSignOutAlt,
  faDonate,
  faWallet,
  faCoins,
  faPlus,
  faRubleSign
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { makeApi } from './server'
import './registerServiceWorker'

library.add(
  faSignOutAlt,
  faDonate,
  faWallet,
  faCoins,
  faPlus,
  faRubleSign
)

Vue.component('default', Default)
Vue.component('auth', Auth)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  makeApi()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
