<template>
  <div>
    <!-- NavBar -->
    <v-toolbar id="toolbar" fixed light color="navbar" class="elevation-2">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text text-lg-h6">Sistema de Gestao de Estoque [B2B]</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" id="logout">  
        <v-row>
          <v-icon dark>mdi-logout</v-icon>
          <v-toolbar-title class="white--text text-lg-h6">Sair</v-toolbar-title>
        </v-row>
      </router-link>
    </v-toolbar>

    <!-- SideMenu id="style-1" -->
    <v-container fluid>
      <v-navigation-drawer v-model="drawer" fixed app clipped class="drawer-style">
        <v-list-item id="avatar-content">
          <v-list-item-avatar>
            <v-img :src="fotoUsuario"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title id="item-title">{{ nomeUsuario }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list dense class="pt-3 white--text">
          <v-list-item v-for="(item, index) in menu" :key="index" :to="item.pagina">
            <v-icon>{{ item.icone }}</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.nome }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    drawer: true,
    nomeUsuario: 'Thales Enrico Giovanni Corte Real Testeteste',
    fotoUsuario: 'https://randomuser.me/api/portraits/men/78.jpg',
    menu: [
      { nome: "Página Inicial", pagina: "home", icone: "mdi-desktop-mac-dashboard" },
      { nome: "Consultas", pagina: "about", icone: "mdi-account-search" },
    ],
  }),
};
</script>

<style>
#toolbar {
  z-index: 9999;
}
#logout {
  cursor: pointer; 
  padding-right:10px;
  text-decoration: none; 
  color: inherit;
}
#item-title {
  white-space: normal;
  font-size: 0.91em;
  text-align:left;
}
#avatar-content {
  margin-top: 2px;
}
@media only screen and (max-width: 1024px) {
  #avatar-content {
    padding-top: 60px;
  }
}
</style>