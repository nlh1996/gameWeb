import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Home from '@/components/home/Home'
import Error from '@/components/Error'
import Guardian from "@/components/guardian/Guardian"
import VoucherView from '@/components/voucher_center/VoucherView'
import LeftMenu from '@/components/voucher_center/LeftMenu'
import RightTable from '@/components/voucher_center/RightTable'
import Personal from '@/components/personal_center/Personal'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register/',
      name: 'register',
      component: Register
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
      path: '/voucherView/leftMenu',
      name: 'leftMenu',
      component: LeftMenu
    },
    {
      path: '/voucherView/rightTable',
      name: 'rightTable',
      component: RightTable
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  }
})