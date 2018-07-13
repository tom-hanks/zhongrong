import Vue from 'vue'
import Router from 'vue-router'
//import Main from '../components/Main.vue'
import home from '../components/home/home.vue'
Vue.use(Router)

export default new Router({
   // mode: 'history',
   routes: [
     {
       path: '/',
       name: 'home',
       component: home
     },
   ]
})
