<template>
  <div class="all">
    <div class="cadastro">
      <h2>Register a property</h2>
      <form class="form" @submit="(e) => submitForm(e)">
        <label> Property name
          <input type="text" v-model="form.name" id="name"  minlength="8" required />
        </label>

        <label>Country
          <input type="text" v-model="form.country" id="country" minlength="8" required />
        </label>
        <label>City
          <input type="text" v-model="form.city" id="city" minlength="8" required />
        </label>
        <Button name="Edit"  type="submit" primaryColor />
      </form>
    </div>
  </div>
</template>

<script>
  import api from '../../services/api'
  import Button from '../../components/Button.vue'

  export default {
    components: {
      Button
    },
    data() {
      return {
        form: {
          name: '',
          country: '',
          city: ''
        }
      }

    },
    
      async mounted() {
      
            const id = this.$route.params.id;
            const response =  await api.get(`/imoveis/${id}`);
            this.form = response.data;

              
        },
    methods: {
      async submitForm(e) {
                try {
                    e.preventDefault()
          const id = this.$route.params.id;
          
          await api.put(`/imoveis/${id}`, this.form)
          alert("Imóvel editado com sucesso!")
          // this.$router.push(`/business-login`);
        } catch (error) {
          alert("Erro ao editar imóvel!")
        }
      },

    },

  }
</script>

<style scoped>
  h2 {
    margin-bottom: 60px;
  }

  .all {
    display: flex;
    align-items: center;
    flex-direction: column;

  }

  .cadastro {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;

  }



  input {
    border-radius: 8px;
    width: 600px;
    display: block;
    margin-bottom: 20px;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>