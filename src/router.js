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
    component: () => import('./views/lineConected/indexAi.vue')
  },
  {
    path: '/xaxis',
    name: '横坐标自定义',
    component: () => import('./views/customizeXaxis/index')
  },
  {
    path: '/dataset',
    name: '数据集使用demo',
    component: () => import('./views/dataset/index1')
  },
  {
    path: '/order',
    name: '执行顺序',
    component: () => import('./views/parent/index')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
