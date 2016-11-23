import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './action'
import index from './modules/index'
import autocomplete from './modules/autocomplete'
Vue.use(Vuex)
export default new Vuex.Store({
  getters,
  actions,
  modules: {
    index,
    autocomplete
  }
  // strict: 'debug'
})
