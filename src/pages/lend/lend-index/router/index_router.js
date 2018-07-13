import Vue from 'vue'
import Router from 'vue-router'

import Sanbiao from '../components/sanbiao'
import Sanbiaozhuanrang from '../components/sanbiaozhuanrang'
import Fujihua from '../components/fujihua'
import Fujihuazhuarang from '../components/fujihuazhuarang'


Vue.use(Router)

export default new Router({
  linkActiveClass:'hit',
  routes: [
    {
      path: '/',
      redirect: '/sanbiao'
    },
    {
      path: '/sanbiao',
      name: 'sanbiao',
      component: Sanbiao
    },
    {
      path: '/sanbiaozhuanrang',
      name: 'sanbiaozhuanrang',
      component: Sanbiaozhuanrang
    },
    {
      path: '/fujihua',
      name: 'fujihua',
      component: Fujihua
    },
    {
      path: '/fujihuazhuarang',
      name: 'fujihuazhuarang',
      component:  Fujihuazhuarang
    }

  ]
})
