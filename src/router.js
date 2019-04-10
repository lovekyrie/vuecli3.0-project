import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'

Vue.use(Router)
export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/slot",
      name: "插槽",
      component: () => import("./views/slot")
    }, {
      path: "/slotProps",
      name: "插槽传值",
      component: () => import("./views/slotProps")
    }, {
      path: "/extend",
      name: "VueApi",
      component: () => import("./views/global")
    }
  ]
})