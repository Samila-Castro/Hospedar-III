<template>
  <nav>
    <ul id="menu">
      <li><a href="#Home">Home</a></li>
      <li><a href="#About us">About us</a></li>
      <li><a href="#Contact">Contact</a></li>
      <li><a href="#Services">Services</a></li>
    </ul>
  </nav>

</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
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
    /* margin-bottom: 230px; */
    margin-top: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
</style>
