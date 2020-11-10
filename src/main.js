import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import '@/utils/rem.js'//两者均可
import 'lib-flexible'
import 'components/vant/index.js'

import 'assets/styles/normalize.scss'
import 'vant/lib/index.css';

import FastClick from 'fastclick'; 
FastClick.attach(document.body); // 移动端使用 fastclick

import {instance} from '@/utils/http/index.js'
Vue.prototype.$http=instance

// 调试
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
// new VConsole() // 初始化

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render:h=> { return h(App) }
}).$mount('#app')
