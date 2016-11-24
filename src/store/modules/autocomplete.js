import * as types from '../mutation'
import data from '../../api/autocomplete'
const state = {
  dataSource: [11, 22, 33, 44, 55],
  focusData: ['123456', '789723', '775873']
}
// getters
const getters = {
  CheckoutDatasouse: state => state.dataSource,
  CheckoutFocusData: state => state.focusData
}
// mutations
const mutations = {
  [types.GET_DATASOUSE] (state, {dataSource}) {
    state.dataSource = dataSource
  }
}
// actions
const actions = {
  checkoutdatasouselist ({ commit }, type) {
    data.getlist(
      type,
      dataSource => commit(types.GET_DATASOUSE, {dataSource})
    )
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
