import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import DemoBlock from './components/demoBlock'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/index.less'

Vue.config.productionTip = false

Vue.component('demo-block', DemoBlock)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
