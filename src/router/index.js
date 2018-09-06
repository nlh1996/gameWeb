import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import View from '@/components/View'
import Error from '@/components/Error'

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
    }
  ]
})