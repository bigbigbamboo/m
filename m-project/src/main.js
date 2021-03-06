import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 配置全局文件&样式
import '@/utils/rem.js'  
import '@/utils/filters.js'  
import '@/assets/css/reset.scss'  

// import '@/assets/font/iconfont.css'

import '@/utils/mixin.js'  

// 配置 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//  vant引入
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
