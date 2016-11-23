import * as types from '../mutation'
const state = {
  title: '首页',
  index: true,
  list: [
  { path: '/AppBar', title: '标题' },
  { path: '/AutoComplete', title: '自动补全' }
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
