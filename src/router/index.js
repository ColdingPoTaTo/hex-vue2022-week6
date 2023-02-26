import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/front/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'aboutfff',
          component: () => import('../views/front/AboutView.vue')
        },
        {
          path: 'product/:id',
          component: () => import('../views/front/ProductView.vue')
        },
        {
          path: 'products',
          component: () => import('../views/front/ProductsView.vue')
        },
        {
          path: 'cart',
          component: () => import('../views/front/CartView.vue')
        },
        {
          path: 'login',
          component: () => import('../views/front/LoginView.vue')
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/admin/AdminOrders.vue')
        }
      ]
    }
  ]
})

export default router
