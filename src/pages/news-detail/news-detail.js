// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './news-detail.vue'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css';
require('!style-loader!css-loader!less-loader!../../common/common.less');
import router from './router/index_router'
import utils   from '/common/common.js'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$utils = utils;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
