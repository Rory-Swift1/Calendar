//引入css重置样式表
import './assets/css/reset.css'
//引入窗口适配的js文件
// import './assets/js/rem'
import { createApp } from 'vue'
import App from './App.vue'
//引入vue-router来进行路由管理
import router from './router'
//引入store
import store from './store'

//进行挂载
createApp(App).use(router).use(store)

.mount('#app')
