<template>

<div class="container-list">
    <Header />

    <div class="container-table">
      <div class="btn">
        <div class="input">
          <el-input size="mini" placeholder="Amount" v-model="input">
          </el-input>
          <el-input size="mini" placeholder="Attribute" v-model="input1">
          </el-input>
        </div>
        <div>
          <el-button @click="getBy()" icon="el-icon-search" circle></el-button>
        </div>
      </div>
      <table :data="imoveis">
        <tr>
          <th>Property name</th>
          <th>Country</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
        <tr v-for="imovel in imoveis" :key="imovel.id">
          <td>{{imovel.name}}</td>
          <td>{{imovel.country}}</td>
          <td>{{imovel.city}}</td>
          <!-- <td> <Button name="Detalhes" :to="`/entidade/${imovel.id}`" primaryColor /></td> -->
          <td class="icons">
            <el-button v-if="isBusiness" @click="handleEdit(imovel.id)" size="small"><i class="el-icon-edit"></i></el-button>
            <el-button @click="handleDetails(imovel.id)" size="small"><i class="el-icon-tickets" ></i></el-button>
            <el-button v-if="isBusiness" @click="handleDelete(imovel.id)" size="small"> <i class="el-icon-delete"></i></el-button>
          </td>
        </tr>

      </table>
      <Button v-if="isBusiness" name="Register new property" :to="`/entidade-cadastro`" primaryColor />
    </div>

  </div>

  <div class="container-list">
    <Header />

    <div class="container-table">
      <div class="btn">
        <div class="input">
          <el-input size="mini" placeholder="Amount" v-model="input">
          </el-input>
          <el-input size="mini" placeholder="Attribute" v-model="input1">
          </el-input>
        </div>
        <div>
          <el-button @click="getBy()" icon="el-icon-search" circle></el-button>
        </div>
      </div>
      <table :data="imoveis">
        <tr>
          <th>Property name</th>
          <th>Country</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
        <tr v-for="imovel in imoveis" :key="imovel.id">
          <td>{{imovel.name}}</td>
          <td>{{imovel.country}}</td>
          <td>{{imovel.city}}</td>
          <!-- <td> <Button name="Detalhes" :to="`/entidade/${imovel.id}`" primaryColor /></td> -->
          <td class="icons">
            <el-button v-if="isBusiness" @click="handleEdit(imovel.id)" size="small"><i class="el-icon-edit"></i></el-button>
            <el-button @click="handleDetails(imovel.id)" size="small"><i class="el-icon-tickets" ></i></el-button>
            <el-button v-if="isBusiness" @click="handleDelete(imovel.id)" size="small"> <i class="el-icon-delete"></i></el-button>
          </td>
        </tr>

      </table>
      <Button v-if="isBusiness" name="Register new property" :to="`/entidade-cadastro`" primaryColor />
    </div>

  </div>

<div class="container-list">
    <Header />

    <div class="container-table">
      <div class="btn">
        <div class="input">
          <el-input size="mini" placeholder="Amount" v-model="input">
          </el-input>
          <el-input size="mini" placeholder="Attribute" v-model="input1">
          </el-input>
        </div>
        <div>
          <el-button @click="getBy()" icon="el-icon-search" circle></el-button>
        </div>
      </div>
      <table :data="imoveis">
        <tr>
          <th>Property name</th>
          <th>Country</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
        <tr v-for="imovel in imoveis" :key="imovel.id">
          <td>{{imovel.name}}</td>
          <td>{{imovel.country}}</td>
          <td>{{imovel.city}}</td>
          <!-- <td> <Button name="Detalhes" :to="`/entidade/${imovel.id}`" primaryColor /></td> -->
          <td class="icons">
            <el-button v-if="isBusiness" @click="handleEdit(imovel.id)" size="small"><i class="el-icon-edit"></i></el-button>
            <el-button @click="handleDetails(imovel.id)" size="small"><i class="el-icon-tickets" ></i></el-button>
            <el-button v-if="isBusiness" @click="handleDelete(imovel.id)" size="small"> <i class="el-icon-delete"></i></el-button>
          </td>
        </tr>

      </table>
      <Button v-if="isBusiness" name="Register new property" :to="`/entidade-cadastro`" primaryColor />
    </div>

  </div>


</template>

<script>
  import api from "../../services/api"

  import Button from '../../components/Button.vue'
  import Header from '../../components/Header.vue'
  export default {

    data() {
      return {
        imoveis: [],
        input: '',
        input1: '',
      }

    },
    components: {
      Button,
      Header
    },

    computed: {
      isBusiness() {
        const login = JSON.parse(localStorage.getItem('@hospedar-login') || '{}')
        if (!login || !login.user) return false
        return login.user.type === 'BUSINESS'
      }
    },

    async mounted() {
      try {
        const response = await api.get('/imoveis');

        this.imoveis = response.data;

      } catch (error) {
        alert('Erro ao listar imoveis')
      }

    },

    methods: {
      async getBy() {
        const response = await api.get(`/imoveis?qtde=${this.input}&nameOrCountryOrCity=${this.input1}`)
        this.imoveis = response.data;

      },
      async handleDelete(id) {

        await api.delete(`/imoveis/${id}`);
        const response = await api.get('/imoveis')
        this.imoveis = response.data;
      },
      async handleEdit(id) {
        this.$router.push(`/edit/${id}`);

        console.log("Chamou handleEdit ", id);

      },
      
      async handleDetails(id) {
        this.$router.push(`/entidade/${id}`);

        console.log("Chamou handleDetails ", id);

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

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  .container-list {

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

  .btn {
    display: flex;
    flex-direction: row;
    align-items: center;

  }

  .input {
    display: flex;
    flex-direction: column;
  }

  .icons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>