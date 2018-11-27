<template>
  <v-toolbar flat color="primary" dark>
    <!-- <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon> -->
    <v-btn flat :to="{name: 'home'}" active-class="active-title">
      <v-toolbar-title>Willdo</v-toolbar-title>
    </v-btn>
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{name: 'about'}">О проекте</v-btn>
      <v-btn flat :to="{name: 'signin'}">Войти</v-btn>
      <v-btn flat :to="{name: 'join'}">Подключиться</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>
