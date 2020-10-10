<template>
  <v-app light>
    <v-main>
      <div v-if="tokenLogged">
          <Menu />
          <router-view />
      </div>
      <div v-else>
          <Login />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Menu from '@/components/default/Menu'
import Login from '@/views/login/Login'

export default {
  name: "App",
  components: { Menu, Login },
  computed: {
    tokenLogged(){
      return !!(this.$store.state.token)
    }
  }
  // mounted(){
  //   (!!(this.$store.state.token))
  //     this.$router.push({ path: 'login/:codigo' })
  // }
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
