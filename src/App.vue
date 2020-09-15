<template>
  <v-app light>
    <v-main>
      <div v-if="this.$route.path == '/'">
          <Login />
      </div>
      <div v-else>
          <Menu />
          <router-view />
          <Footer />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Menu from '@/components/default/Menu'
import Footer from '@/components/default/Footer'
import Login from '@/views/login/Login'

export default {
  name: "App",
  components: { Menu, Footer, Login },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@media only screen and (max-width: 724px) {
  .custom-typography{
    font-size: 3.6vw!important;
  }
}
</style>
