<template>
  <v-container fill-height fluid class="home-hero">
    <v-layout justify-center align-center column pa-5>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Willdo will do"/>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
.home-hero {
  background: url("/images/christmas-wall.jpg");
  height: 100%;
  width: 100%;
  max-height: 100vh;
  background-size: cover;
}
</style>
