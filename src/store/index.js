import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import Token from './modules/token'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Token
  },
  getters
})
