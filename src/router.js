import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index'
import AppBar from './components/AppBar'
import AutoComplete from './components/autocomplete'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
   { path: '/', component: Index, name: '首页' },
   { path: '/AppBar', component: AppBar, name: '标题' },
   { path: '/AutoComplete', component: AutoComplete, name: '自动补全' }
  ]
})
export default router
