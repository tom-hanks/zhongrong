// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './register.vue'
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
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
