import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入路由
import router from './router/index'

// 完整引入 element-UI
/* import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' */

// 按需引入 Element-UI


createApp(App)
  .use(router) // ++ 挂载路由
  .mount('#app')

