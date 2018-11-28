<template>
  <v-toolbar flat color="primary" dark>
    <!-- <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon> -->
    <v-btn flat :to="{name: 'home'}" active-class="active-title">
      <v-toolbar-title>Willdo</v-toolbar-title>
    </v-btn>
    <template v-if="isAuthenticated">
      <v-toolbar-items>
        <v-btn flat :to="{name: 'willdo.index'}">Буду делать</v-btn>
      </v-toolbar-items>
    </template>
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{name: 'about'}">О проекте</v-btn>

      <template v-if="!isAuthenticated">
        <v-btn flat :to="{name: 'signin'}">Войти</v-btn>
        <v-btn flat :to="{name: 'join'}">Подключиться</v-btn>
      </template>
      <template v-else>
        <v-btn flat @click="userLogout">Выйти</v-btn>
      </template>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AppNavigation',
  computed: {
    ...mapState('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['userLogout'])
  }
}
</script>
