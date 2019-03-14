<template>
  <v-container fill-height fluid class="fullwidth-mobile">
    <v-container class="fullwidth-mobile">
      <!-- Show Loading indicator while getting tasks -->
      <v-layout v-if="isLoading" class="justify-center">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-layout>
      <v-layout v-else column text-left>
        <v-text-field v-model="todo" label="Я буду делать…" solo @keydown.enter="create" class="todo-input">
          <v-fade-transition slot="append">
            <v-icon v-if="todo" @click="create">add_circle</v-icon>
          </v-fade-transition>
        </v-text-field>

        <v-layout my-1 align-start style="position:sticky;top:70px">
          <strong class="mx-3 info--text text--darken-3">Remaining: {{ remainingTasks.length }}</strong>
          <v-divider vertical></v-divider>
          <strong class="mx-3 black--text">Completed: {{ completedTasks.length }}</strong>
          <v-spacer></v-spacer>
          <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
        </v-layout>

        <v-card v-if="todos.length > 0" style="position:sticky;top:150px" class="elevation-0">
          <v-slide-y-transition class="py-0" group tag="v-list">
            <template v-for="(todo, i) in remainingTasks">
              <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

              <v-list-tile :key="`${i}-${todo.data().text}`">
                <v-list-tile-action>
                  <v-checkbox :value="todo.data().done" @change="toggleState(todo)" color="info darken-3" />
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title
                    :class="todo.data().done && 'grey--text' || 'text--primary'"
                    v-html="todo.data().text">
                  </v-list-tile-title>
                </v-list-tile-content>

                <v-spacer></v-spacer>

                <v-scroll-x-transition>
                  <v-icon v-if="todo.data().done" color="success">check</v-icon>
                </v-scroll-x-transition>
              </v-list-tile>
            </template>
          </v-slide-y-transition>
        </v-card>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { db } from '@/firebase'
import { constants } from 'fs';

export default {
  data: () => ({
    isLoading: true,
    todo: '',
    todos: [],
    todosUnsubscribe: null
  }),
  computed: {
    ...mapState('auth', ['user']),
    completedTasks () {
      return this.todos.filter(todo => todo.data().done)
    },
    progress () {
      return (this.completedTasks.length / this.todos.length) * 100
    },
    remainingTasks () {
      return this.todos.filter(todo => todo.data().done == false)
    }
  },
  methods: {
    ...mapActions(['pushMessage']),
    ...mapActions('todo', ['addTodo', 'loadTodos']),
    async create () {
      try {
        await this.addTodo({
          done: false,
          text: this.todo
        })

        this.pushMessage({ message: 'И это тоже сделаю!', type: 'success' })
        this.todo = null
      } catch (error) {
        this.pushMessage({ message: [error.message], type: 'error' })
      }
    },
    async toggleState (todo) {
      console.log(todo)
      try {
        await todo.ref.update({ done: !todo.data().done })
      } catch (error) {
        this.pushMessage({ message: [error.message], type: 'error' })
      }
    }
  },
  created () {
    this.todosUnsubscribe = db.collection('todos')
      .where('user', '==', this.user.uid)
      .orderBy('timestamp', 'desc')
      .onSnapshot((querySnapshot) => {
        console.log('Data updated')

        let _todos = []
        querySnapshot.forEach(element => {
          _todos.push(element)
          console.log(element)
        })
        this.todos = _todos
        this.isLoading = false
      })

    if (this.todosUnsubscribe) {
      console.log('Connection established')
    }
  },
  destroyed () {
    if (this.todosUnsubscribe) {
      this.todosUnsubscribe()
    }
    if (this.todosUnsubscribe) {
      console.log('Connection destroyed')
    }
  }
}
</script>

<style lang="scss">
.todo-input {
  position: sticky;
  position: -webkit-sticky;
  top: 10px;

  @media (max-width: 600px) {
    top: 0;
  }
}

</style>
