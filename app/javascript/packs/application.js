/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')


import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from '../app.vue'
import router from '../src/router'
import store from '../src/store'

Vue.use(iView)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(TurbolinksAdapter)

Vue.http.headers.common['Content-Type'] = `application/json`

document.addEventListener("turbolinks:load", function() {

  const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
  })
})
