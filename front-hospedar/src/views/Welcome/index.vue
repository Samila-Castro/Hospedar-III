<template>
  <div class="container">
    <div class="content background-dark content-left">
      <Logo />
    </div>

    <div class="content content-rigth">
      <div class="header">
        <Header />
      </div>

        <div class="description">
          <Description content="Lorem ipsum is placeholder text commonly used in the graphic print, and publishing. " />
        </div>
        <div class="buttons">
          <Button name="Business" to="business-cadastro"/>
          <Button name="Client" to="client-cadastro"/>
        </div>
    </div> 
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Button from '../../components/Button.vue'
  import Logo from '../../components/Logo.vue'
  import Description from '../../components/Description.vue'
  
  export default {
    name: 'Welcome',
    components: {
      Header,
      Logo,
      Button,
      Description
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    height: 100vh;
    background: #4E5FCD;
  }

  .content {
    width: 50vw;
    height: 100vh;
  }

  .description {
    padding: 180px 20px 180px;
    text-align: center;
  }


  .content-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-left: 20px;
  }
</style>


