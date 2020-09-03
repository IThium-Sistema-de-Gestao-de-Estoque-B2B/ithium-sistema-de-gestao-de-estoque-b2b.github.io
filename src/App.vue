<template>
  <v-app light>
    <v-main>
      <div v-if="this.$route.path == '/login'">
          <!--  Páginas a serem carregadas -->
          <!-- <router-view /> -->
          <Login />
      </div>
      <div v-else>
        <div>
          <!--  Menu a ser carregado em todas as páginas logadas -->
          <Menu></Menu>
        </div>
        <div>
          <!--  Páginas a serem carregadas -->
          <router-view />
        </div>
        <div>
          <!--  Footer a ser carregado em todas as páginas logadas -->
          <Footer></Footer>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/default/Menu'
import Footer from './components/default/Footer'
import Login from './views/login/Login.vue'

export default {
  name: "App",
  components: { Menu, Footer, Login },
  data: () => ({
  }),
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
