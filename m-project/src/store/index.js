import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import users from './module/users'
import pay from './module/pay'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    pay
  }
})
