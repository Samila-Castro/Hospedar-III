<template>
  <nav>
    <ul id="menu">
      <li><a href="#Home">Home</a></li>
      <li><a href="#About us">About us</a></li>
      <li><a href="#Our services">Our services</a></li>
      <li><a @click="logout()">Go out</a></li>
    </ul>
  </nav>

</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    },
    components:{
    },
    methods:{
      logout(){
          localStorage.removeItem('@hospedar-login');
          this.$router.push(`/`);
      }
    }
  }
</script>


<style scoped>

  ul {
    list-style-type: none;
    display: inline-block;
    padding: 0 12px;
    display: flex;
    justify-content: space-evenly;
    font-size: 18px;
  }

  nav {
    padding: 20px;
    background: #094275;
     width: 100vw;
  }

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
</style>
