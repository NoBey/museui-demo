import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index'
import AppBar from './components/AppBar'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
   { path: '/', component: Index },
   { path: '/AppBar', component: AppBar }
  ]
})
export default router
