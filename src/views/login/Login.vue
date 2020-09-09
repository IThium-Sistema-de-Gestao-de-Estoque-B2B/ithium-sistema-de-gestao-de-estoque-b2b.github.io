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

              <v-form ref="formLogin" @submit.prevent="login">
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
                  :type="showPassword ? 'text' : 'password'" 
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                  @click:append="showPassword = !showPassword"
                  required
                  ></v-text-field>
                
                <v-btn 
                  :dark="!isButtonValid"
                  type="submit" 
                  color="project"
                  :disabled="isButtonValid"
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
    user: {
      access: '',
      password: '',
    },
    showPassword: false,
  }),
  methods: {
    login(){
      this.$router.push('/home');
    }
  },
  computed: {
    isButtonValid(){
      return !((this.user.access.length > 0) && (this.user.password.length > 0))
    }
  },
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