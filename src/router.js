import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/slot',
    name: '插槽',
    component: () => import('./views/slot'),
  },
  {
    path: '/slotProps',
    name: '插槽传值',
    component: () => import('./views/slotProps'),
  },
  {
    path: '/extend',
    name: 'VueApi',
    component: () => import('./views/global'),
  },
  {
    path: '/echarts',
    name: 'Echarts',
    component: () => import('./views/echarts')
  },
  {
    path: '/simple',
    name: '折线图',
    component: () => import('./views/simple')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
