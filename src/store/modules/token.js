import { userLogin } from '@/apis/users/user'
import cookies from 'vue-cookies'

export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    updateToken (state, token) {
      state.token = token
    }
  },
  actions: {
    updateToken ({ commit }, token) {
      commit('updateToken', token)
    },
    login ({ commit }, form) {
      return new Promise((resolve, reject) => {
        userLogin(form).then(resp => {
          commit('updateToken', resp.data.data)
          cookies.set('x-token', resp.data.data)
          resolve(resp)
        }).catch(err => {
          reject(err.response.data)
        })
      })
    }
  }
}
