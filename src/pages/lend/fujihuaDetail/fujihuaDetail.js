// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '/pages/lend/fujihuaDetail/fujihuaDetail.vue'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import utils from '/common/common.js'


require('!style-loader!css-loader!less-loader!/common/common.less');
import router from './router/index_router'
Vue.config.productionTip = false


Vue.use(ElementUI);

Vue.prototype.$utils = utils;







/* eslint-disable no-new */
var aa = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
