// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './lend-index.vue'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css';
import {Input,InputNumber} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


require('!style-loader!css-loader!less-loader!/common/common.less');
import router from './router/index_router'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

Vue.use(Input);
Vue.use(InputNumber);

/**
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
 **/

Vue.directive('focus', function (el, option) {
  var defClass = 'el-input', defTag = 'input';
  var value = option.value || true;
  if (typeof value === 'boolean')
    value = { cls: defClass, tag: defTag, foc: value };
  else
    value = { cls: value.cls || defClass, tag: value.tag || defTag, foc: value.foc || false };
  if (el.classList.contains(value.cls) && value.foc)
    el.getElementsByTagName(value.tag)[0].focus();
});




/* eslint-disable no-new */
var aa = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
