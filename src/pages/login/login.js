// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './login.vue'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
require('!style-loader!css-loader!less-loader!../../common/common.less');
import router from './router/index_router'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
