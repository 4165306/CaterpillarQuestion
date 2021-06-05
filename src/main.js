import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'

import '@/router/gurad'

import 'ant-design-vue/dist/antd.css'

import SmartTree from 'smart-tree'
import 'smart-tree/dist/smart-tree.css'

Vue.use(SmartTree)

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
