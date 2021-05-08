import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from './pages/LoginPage'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: LoginPage
    }
  ]
})
