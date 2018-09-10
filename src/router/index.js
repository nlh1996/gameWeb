import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import View from '@/components/View'
import Error from '@/components/Error'
import Guardian from "@/components/Guardian"
import VoucherView from '@/components/voucher_center/VoucherView'
import LeftMenu from '@/components/voucher_center/LeftMenu'
import RightTable from '@/components/voucher_center/RightTable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view',
      component: View
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
    }

  ]
})