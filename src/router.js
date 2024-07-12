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
  },
  {
    path: '/line',
    name: '指示线拼接',
    component: () => import('./views/lineConected/index')
  },
  {
    path: '/xaxis',
    name: '横坐标自定义',
    component: () => import('./views/customizeXaxis/index')
  },
  {
    path: '/transfer',
    name: '排序',
    component: () => import('./views/transfer/index')
  },
  {
    path: '/border',
    name: '边框',
    component: () => import('./views/roundedBorder/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
