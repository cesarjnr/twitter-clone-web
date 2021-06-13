import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from './pages/LoginPage'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/i/flow/signup',
      component: LoginPage
    }
  ]
})
