import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Error from '@/components/Error'
import Guardian from "@/components/guardian/Guardian"
import VoucherView from '@/components/voucher_center/VoucherView'
import Personal from '@/components/personal_center/Personal'
import bbs from '@/components/bbs/Bbs'

Vue.use(Router)

export default new Router({
//  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/error',
      name: 'error',
      component: Error
    },
    {
      path: '/guardian',
      name: 'guardian',
      component: Guardian
    },
    {
      path: '/voucherView',
      name: 'voucherView',
      component: VoucherView
    },

    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/bbs',
      name: 'bbs',
      component: bbs
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  }
})