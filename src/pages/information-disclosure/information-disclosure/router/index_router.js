import Vue from 'vue'
import Router from 'vue-router'
import Detail1 from '../components/detail1/detail1'
import Detail2 from '../components/detail2/detail2'
import Detail3 from '../components/detail3/detail3'
import Detail4 from '../components/detail4/detail4'
import Detail5 from '../components/detail5/detail5'
import Detail6 from '../components/detail6/detail6'
import Detail7 from '../components/detail7/detail7'
import Detail8 from '../components/detail8/detail8'

Vue.use(Router)
export default new Router({
	routes: [
				{
					path: '/',
					redirect: '/detail1'
				},
				{
					path: '/detail1',
					name: 'detail1',
					component: Detail1
				},
				{
					path: '/detail2',
					name: 'detail2',
					component: Detail2
				},
				{
					path: '/detail3',
					name: 'detail3',
					component: Detail3
				},
				{
					path: '/detail4',
					name: 'detail4',
					component: Detail4
				},
				{
					path: '/detail5',
					name: 'detail5',
					component: Detail5
				},
				{
					path: '/detail6',
					name: 'detail6',
					component: Detail6
				},
				{
					path: '/detail7',
					name: 'detail7',
					component: Detail7
				},
				{
					path: '/detail8',
					name: 'detail8',
					component: Detail8
				},
			]
})
