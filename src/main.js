import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import localeEN from './locale/en'
import localeJA from './locale/ja'
require('../assets/bootstrap/css/bootstrap.min.css')

Vue.use(VueI18n)

// define & set lang
Vue.locale('en', localeEN)
Vue.locale('ja', localeJA)

Vue.config.lang = 'ja'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
