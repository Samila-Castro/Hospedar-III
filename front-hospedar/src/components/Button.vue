<template>
  <div class="content-btn">
    
    
    <router-link :to="to"
    v-if="to"
    class="button"
    :class="{'primary-color': primaryColor}"
    >
   
      {{name}}
    </router-link>

    <button 
    v-else
    class="button"
    :class="{'primary-color': primaryColor}"
    >
   
      {{name}}
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      to: {
         type: String,
         default: ''
      },
      name: String,
      primaryColor: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

  .button {
    margin: 5px;
    border-radius: 15px;
    background-color: rgb(38, 0, 255);
    border: 0.5px solid #fff;
    color: white;
    text-align: center;
    padding: 5px 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    background-color: transparent;
    cursor: pointer;
  }
  .primary-color {
     background: #4E5FCD;
     border: #4E5FCD;
    
  }

  .button:hover {
    background-color: #fff;
    border: 0.5px solid #4E5FCD;
    color: #4E5FCD;
  }
</style>