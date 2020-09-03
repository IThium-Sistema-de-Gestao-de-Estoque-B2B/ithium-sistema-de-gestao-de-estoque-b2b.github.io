<template>
  <div class="login">
    <v-container fill-height="fill-height">
      <v-layout align-center="align-center" justify-center="justify-center">
        <v-flex class="login-form text-xs-center">

          <v-card light>
            <v-card-text>

              <div class="display-1 mb-3">
                <v-icon class="mr-2" large></v-icon>Login
              </div>

              <v-form ref="formLogin">
                <v-text-field 
                  v-model="user.access"
                  color="project" 
                  prepend-icon="mdi-account-circle" 
                  label="Usuario" 
                  type="email"
                  required
                  ></v-text-field>
                
                <v-text-field 
                  v-model="user.password"
                  color="project" 
                  prepend-icon="mdi-lock" 
                  label="Senha" 
                  :type="mostrarSenha ? 'text' : 'password'" 
                  :append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'" 
                  @click:append="mostrarSenha = !mostrarSenha"
                  required
                  ></v-text-field>
                
                <v-btn 
                  :dark="!buttonDisabled" 
                  @click.prevent 
                  type="submit" 
                  color="project"
                  :disabled="buttonDisabled"
                >Login</v-btn>
              </v-form>

            </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    //buttonDisabled: false,
    user: {
      access: '',
      password: '',
    },
    options: {
      isLoggingIn: true,
      shouldStayLoggedIn: true,
    },
    mostrarSenha: false,
  }),
  computed: {
    buttonDisabled: function (){
      return !((this.user.access.length > 0) && (this.user.password.length > 0))
    }
  }
};
</script>
<style scoped>
.login {
  background-color: #004c90;
  height: 100vh;
}
.login-form {
  max-width: 500px;
}
</style>