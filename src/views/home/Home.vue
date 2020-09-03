<template>
  <div class="home">
    <p>HOME - Página Inicial</p>
  </div>
</template>

<script>

export default {
  name: "Home",
  data: () => ({
    dados: []
  }),
  mounted(){
    this.$http.getWithoutToken()
    .then(response => {
      console.log(response.data)
    })
    .catch(reject => {
      console.log(reject.data)
    })
  }
};
</script>
