import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from '../src/views/Test.vue'

Vue.use(iView)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#home',
    render: h => h(App)
  })
  console.log(app)
})
