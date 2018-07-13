import Vue from 'vue'
import Router from 'vue-router'
import detail from '../components/detail/detail'
import detail1 from '../components/detail1/detail1'
import detail2 from '../components/detail2/detail2'
import detail3 from '../components/detail3/detail3'
import detail4 from '../components/detail4/detail4'
import detail5 from '../components/detail5/detail5'
import detail6 from '../components/detail6/detail6'
import detail7 from '../components/detail7/detail7'
import detail8 from '../components/detail8/detail8'
import detail9 from '../components/detail9/detail9'
import detail10 from '../components/detail10/detail10'
import detail11 from '../components/detail11/detail11'
import detail12 from '../components/detail12/detail12'
import detail13 from '../components/detail13/detail13'//基本信息
import detail14 from '../components/detail14/detail14'//上传资料
import detail15 from '../components/detail15/detail15'//我的借款



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'detail',
      component: detail
    },
    {
      path: '/detail1/:num/:id',
      name: 'detail1',
      component: detail1
    },
    {
      path: '/detail2/:num/:id',
      name: 'detail2',
      component: detail2,
  	},
    {
      path: '/detail3/:num/:id',
      name: 'detail3',
      component: detail3
  	},
    {
      path: '/detail4/:num/:id',
      name: 'detail4',
      component: detail4,
  	},
    {
      path: '/detail5/:num/:id',
      name: 'detail5',
      component: detail5
  	},
    {
      path: '/detail6/:num/:id',
      name: 'detail6',
      component: detail6,
  	},
    {
      path: '/detail7/:num/:id',
      name: 'detail7',
      component: detail7,
  	},
    {
      path: '/detail8/:num/:id',
      name: 'detail8',
      component: detail8,
  	},
    {
      path: '/detail9/:num/:id',
      name: 'detail9',
      component: detail9
  	},
    {
      path: '/detail10/:num/:id',
      name: 'detail10',
      component: detail10
  	},
    {
      path: '/detail11/:num/:id',
      name: 'detail11',
      component: detail11
  	},
    {
      path: '/detail12/:num/:id',
      name: 'detail12',
      component: detail12
    },
    {
      path: '/detail13/:num/:id',
      name: 'detail13',
      component: detail13
  	},
    {
      path: '/detail14/:num/:id',
      name: 'detail14',
      component: detail14
  	},
    {
      path: '/detail15/:num/:id',
      name: 'detail15',
      component: detail15
  	}
  ]
})
