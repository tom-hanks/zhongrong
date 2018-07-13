import Vue from 'vue'
import Router from 'vue-router'
import companyProfile from '../components/company-profile/company-profile.vue'
// import honor from '../components/honor/honor.vue'
// import newsCenter from '../components/news-center/news-center.vue'
// import infoDisclosure from '../components/info-disclosure/info-disclosure.vue'
// import platformBulletin from '../components/platform-bulletin/platform-bulletin.vue'
// import legalSupervision from '../components/legal-supervision/legal-supervision.vue'
// import noviceGuide from '../components/novice-guide/novice-guide.vue'
// import problem from '../components/problem/problem.vue'
// import customerService from '../components/customer-service/customer-service.vue'
Vue.use(Router)

export default new Router({
   // mode: 'history',
   routes: [
     {
       path: '',
       redirect: "/companyProfile/:num"
     },
     {
       path: '/companyProfile/:num',
       name: 'companyProfile',
       component: companyProfile
     },
   //   {
   //     path: '/honor/:num',
   //     name: 'honor',
   //     component: honor
   //   },
   //   {
   //     path: '/newsCenter/:num',
   //     name: 'newsCenter',
   //     component: newsCenter
   //   },
   //   {
   //     path: '/infoDisclosure/:num',
   //     name: 'infoDisclosure',
   //     component: infoDisclosure
   //   },
   //   {
   //     path: '/platformBulletin/:num',
   //     name: 'platformBulletin',
   //     component: platformBulletin
   //   },
   //   {
   //     path: '/legalSupervision/:num',
   //     name: 'legalSupervision',
   //     component: legalSupervision
   //   },
   //   {
   //     path: '/noviceGuide/:num',
   //     name: 'noviceGuide',
   //     component: noviceGuide
   //   },
   //   {
   //     path: '/problem/:num',
   //     name: 'problem',
   //     component: problem
   //   },
   //   {
   //     path: '/customerService/:num',
   //     name: 'customerService',
   //     component: customerService
   // },
   ]
})
