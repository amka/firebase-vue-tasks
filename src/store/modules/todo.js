import { db } from '@/firebase'

export default {
  namespaced: true,
  state: {
    todos: []
  },
  mutations: {
    addTodo (state, payload) {
      state.todos.push(payload)
    },
    setTodos (state, payload) {
      state.todos = payload
    }
  },
  actions: {
    async addTodo ({ dispatch, commit }, { text, done }) {
      try {
        const docRef = await db.collection('todos').add({
          text,
          done
        })
        dispatch('pushMessage', { type: 'success', message: 'Заданиче добавлено с ID' + docRef.id }, { root: true })
      } catch (error) {
        dispatch('pushMessage', { type: 'error', message: 'Error adding document' }, { root: true })
      }
    },
    async loadTodos ({ dispatch, commit }) {
      try {
        const querySnapshot = await db.collection('todos').get()
        querySnapshot.forEach(todo => {
          commit('addTodo', todo)
        })
      } catch (error) {
        dispatch('pushMessage', { type: 'error', message: 'Не удалось загрузить данные' }, { root: true })
      }
    }
  }
}
