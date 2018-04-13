import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from '../src/views/Test.vue'

import store from '../src/store'

Vue.use(iView)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#home',
    store: store,
    render: h => h(App)
  })
  console.log(app)
})
