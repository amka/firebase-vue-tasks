<template>
  <v-app>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <alert-bar />
    <app-navigation/>
    <v-content transition="slide-x-transition">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AlertBar from '@/components/AlertBar.vue'
import AppNavigation from '@/components/AppNavigation.vue'

export default {
  name: 'App',
  components: {
    AlertBar,
    AppNavigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.christmas {
  background: url("/images/christmas-wall.jpg") no-repeat top center;
  background-size: cover;
}

.fullwidth-mobile {
  @media (max-width: 599px) {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
