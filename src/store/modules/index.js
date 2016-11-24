import * as types from '../mutation'
const state = {
  title: '首页',
  index: true,
  list: [
  { path: '/AppBar', title: '标题' },
  { path: '/AutoComplete', title: '自动补全' },
  { path: '/Avatar', title: '文字和图标' },
  { path: '/Badge', title: '徽章' },
  { path: '/BottomNavigation', title: '底部的导航' },
  { path: '/BottomSheet', title: '底部动作条' },
  { path: '/Button', title: '按钮' },
  { path: '/Card', title: '卡片' },
  { path: '/Chip', title: '块' },
  { path: '/DatePicker', title: '日期选择器' },
  { path: '/Dialog', title: '弹窗' },
  { path: '/Divider', title: '分隔' },
  { path: '/Drawer', title: '抽屉式导航' }
  ]
}

// getters
const getters = {
  checkoutList: state => state.list
}
// mutations not use
const mutations = {
  [types.CHANGE_INDEX_STATE] (state, title) {
    state.title = title
  }
}
export default {
  state,
  getters,
  mutations
}
