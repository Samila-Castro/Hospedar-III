<template>
  <div class="conteiner">
    <Logo />
    <Description title="404" content="Página não encontrada" />
    <Button to="/" name="Retornar para home" />
  </div>
</template>

<script>
  import Button from '../../components/Button.vue'
  import Logo from '../../components/Logo.vue'
  import Description from '../../components/Description.vue'

  export default {
    name: 'Welcome',
    components: {
      Logo,
      Button,
      Description
    }
  }
</script>
<style scoped>
  .conteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 70px;
    background-color:#4E5FCD ;
  }
</style>