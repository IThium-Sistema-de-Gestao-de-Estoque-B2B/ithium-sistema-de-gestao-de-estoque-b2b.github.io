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

                <Button 
                  label="Login" 
                  myType="submit" 
                  color="project" 
                  :isButtonValid="isButtonValid" 
                />                
              </v-form>

            </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: "Login 2",
  components: { Button },
  props: ['codigo'],
  data: () => ({
    user: {
      access: '',
      password: '',
    },
    showPassword: false,
  }),
  methods: {
    login(){
      if(this.user.access == "teste.dev" && this.user.password == "123456"){
          this.$store.dispatch('login', {
            "email": "gboyenj@mapy.cz",
            "password": "3A1N4xiB"
          })
          .then(() => {
            this.$router.push({ name: 'Home' })
          })
          .catch(() => {
            this.$swal.fire(
              'Erro!',
              'Usuario e/ou Senha incorretos!',
              'error'
            )
          })
      } else {
        this.$swal.fire(
          'Erro!',
          'Usuario e/ou Senha incorretos!',
          'error'
        ).then(() => {
          this.user.access = '' 
          this.user.password = ''
        })
      }
    }
  },
  computed: {
    isButtonValid(){
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