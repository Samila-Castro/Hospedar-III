<template>
  <div class="container-list">
  <Header />
  <div class="container-table">
  <Button v-if="isBusiness" name="Register new property" :to="`/entidade-cadastro`" primaryColor />
   <table :data="imoveis">
    <tr>
      <th>Nome da propriedade</th>
      <th>País</th>
      <th>Cidade</th>
      <th>Ações</th>
    </tr>
    <tr v-for="imovel in imoveis" :key="imovel.id">
      <td>{{imovel.name}}</td>
      <td>{{imovel.country}}</td>
      <td>{{imovel.city}}</td>
      <td> <Button name="Detalhes" :to="`/entidade/${imovel.id}`" primaryColor /></td>
    </tr>
    
  </table>
  </div>
 
</div>
</template>

<script>
import api from "../../services/api"

import Button from '../../components/Button.vue'
import Header from '../../components/Header.vue'
export default {
   
    data(){
      return{
        imoveis: []
      }

    },
    components: {
        Button,
        Header
    },

    computed:{
      isBusiness(){
        const login = JSON.parse(localStorage.getItem('@hospedar-login') || '{}')
        if(!login || !login.user ) return false
        return login.user.type === 'BUSINESS'
      }
    },

    async mounted(){
      try {
        const response = await api.get('/imoveis');
        console.log(response);
        this.imoveis = response.data.imoveis
        
      } catch (error) {
        alert('Erro ao listar imoveis')
      }
      
    }


}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.container-list{

    height: 100vh;
    background-color: #fff;
    
}
.container-table {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

}
</style>