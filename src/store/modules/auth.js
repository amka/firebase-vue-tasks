import firebase from 'firebase'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    user: null,
    isAuthenticated: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setIsAuthenticated (state, payload) {
      state.isAuthenticated = payload
    }
  },
  actions: {
    async userJoin ({ commit }, { email, password }) {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
        commit('setUser', user)
        commit('setIsAuthenticated', true)
        router.push('/')
      } catch (error) {
        console.error(error)
        commit('setUser', null)
        commit('setIsAuthenticated', false)
        router.push('/')
      }
    },
    async userLogin ({ commit }, { email, password }) {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        commit('setUser', user)
        commit('setIsAuthenticated', true)
        router.push('/')
      } catch (error) {
        console.error(error)
        commit('setUser', null)
        commit('setIsAuthenticated', false)
        router.push('/')
      }
    },
    async userLogout ({ commit }) {
      try {
        await firebase.auth().signOut()
      } catch (error) {
        console.error(error)
      }
      commit('setUser', null)
      commit('setIsAuthenticated', false)
      router.push('/')
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    }
  }
}