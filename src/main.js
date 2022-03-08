import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import 'components/elementComponents.js'

// 引入封装 qiankun 启动方法
import startQiankun from '../child'
// 启动 qiankun
startQiankun()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
