import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Home from '@/page/home/Home'
import User from '@/page/user/User'
import Pay from '@/page/pay/Pay'
import Bbs from '@/page/bbs/Bbs'
import Error from '@/common/Error'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index,
    name: 'index',
    redirect: '/home',
    children: [{
        path: 'home',
        component: Home
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'pay',
        name: 'pay',
        component: Pay
      },
      {
        path: 'bbs',
        name: 'bbs',
        component: Bbs
      },
      {
        path: 'error',
        name: 'error',
        component: Error
      }
    ]
  }, ]
})
