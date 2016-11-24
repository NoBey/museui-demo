import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index'
import AppBar from './components/AppBar'
import AutoComplete from './components/autocomplete'
import Avatar from './components/Avatar'
import Badge from './components/Badge'
import BottomNavigation from './components/BottomNavigation'
import BottomSheet from './components/BottomSheet'
import Button from './components/Buttons'
import Card from './components/Card'
import Chip from './components/Chip'
import DatePicker from './components/DatePicker'
import Dialog from './components/Dialog'
import Divider from './components/Divider'
import Drawer from './components/Drawer'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
   { path: '/', component: Index, name: '首页' },
   { path: '/AppBar', component: AppBar, name: '标题' },
   { path: '/AutoComplete', component: AutoComplete, name: '自动补全' },
   { path: '/Avatar', component: Avatar, name: '图片文字' },
   { path: '/Badge', component: Badge, name: '徽章' },
   { path: '/BottomNavigation', component: BottomNavigation, name: '底部的导航' },
   { path: '/BottomSheet', component: BottomSheet, name: '底部动作条' },
   { path: '/Button', component: Button, name: '按钮' },
   { path: '/Card', component: Card, name: '卡片' },
   { path: '/Chip', component: Chip, name: '块' },
   { path: '/DatePicker', component: DatePicker, name: '日期选择器' },
   { path: '/Dialog', component: Dialog, name: '弹窗' },
   { path: '/Divider', component: Divider, name: '分隔' },
   { path: '/Drawer', component: Drawer, name: '抽屉式导航' }
  ]
})
router.beforeEach((to, from, next) => {
  next(vm => {
    console.log(vm.title)
  })
})
export default router
