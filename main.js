import Vue from 'vue'
import App from './App'

import store from './store/store.js'

// 引入SDK核心类，js文件根据自己业务，位置可自行放置
// var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
// import QQMapWX from '@/libs/qqmap-wx-jssdk.js'

// // 实例化API核心类
//     const qqmapsdk = new QQMapWX({
//         key: 'IWIBZ-BG5E3-COK3S-Y2RPR-2M2QK-5YFUZ'
//     });

// 导入网络请求的包
import { $http } from '@escook/request-miniprogram'

uni.$http = $http

// 请求的根路径
// $http.baseUrl = 'https://www.uinav.com'

// 请求拦截器
$http.beforeRequest = function(options) {
  uni.showLoading({
    title: '数据加载中...'
  })
}

// 响应拦截器
$http.afterRequest = function() {
  uni.hideLoading()
}

// 封装弹框的方法
uni.$showMsg = function(title = '数据请求失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none'
  })
}




Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
  // QQMapWX
})
app.$mount()



// // #ifndef VUE3
// import Vue from 'vue'
// import App from './App'

// Vue.config.productionTip = false

// App.mpType = 'app'

// const app = new Vue({
//     ...App
// })
// app.$mount()
// // #endif

// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// import App from './App.vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif