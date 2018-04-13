import Vue from 'vue/dist/vue.esm'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from '../src/views/iview-test.vue'

Vue.use(iView)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#iview',
    render: h => h(App)
  })
  console.log(app)
})
