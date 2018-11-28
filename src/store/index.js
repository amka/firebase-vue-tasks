import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    todo
  },
  state: {
    messages: {
      success: '',
      error: [],
      warning: '',
      validation: []
    }
  },
  mutations: {
    pushMessage (state, payload) {
      state.messages[payload.type] = payload.message
    }
  },
  actions: {
    pushMessage ({ commit }, { message, type }) {
      commit('pushMessage', { message, type })
    },
    resetMessages ({ commit }) {
      commit('pushMessage', { type: 'success', message: '' })
      commit('pushMessage', { type: 'error', message: [] })
      commit('pushMessage', { type: 'warning', message: '' })
      commit('pushMessage', { type: 'validation', message: [] })
    }
  }
})
