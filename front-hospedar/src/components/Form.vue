<template>
  <label for="">
 
    <input type="text" id="nome" placeholder="Name" />
  </label>
  <label for="">
    <input type="email" id="email" placeholder="Email"/>
  </label>
  <label for="">
    <input type="password" id="senha" placeholder="Password" />
  </label>


</template>

<script>
  export default {

  }
</script>


<style scoped>
  input {
    width: 150px;
    margin: 3px;
    height: 23px;
    border: none;
    font-size: 8px;
    padding: 10px;
    background-color: #ecf0f1;
  }
</style>