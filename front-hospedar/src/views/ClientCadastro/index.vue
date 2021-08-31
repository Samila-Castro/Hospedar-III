<template>

    <div class="container">
        <div class="content">
            <div class="content-left">
                <Description title="Welcome back!"
                    content="Log in to the platform "
                    class="description" />
                <Button name="Sign in" to="/client-login" />
            </div>
            <div class="content-rigth">
                <h1>Create Account</h1>
                <form class="form" @submit="(e) => submitForm(e)">
                    <label for="">

                        <input type="text" id="name" placeholder="Name" v-model="form.name" minlength="6" required/>
                    </label>
                    <label for="">
                        <input type="email" id="email" placeholder="Email" v-model="form.email" required/>
                    </label>
                    <label for="">
                        <input type="password" id="password" placeholder="Password" v-model="form.password" inlength="8" required/>
                    </label>

                   <Button name="Sign Up" type="submit" primaryColor/>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../././../services/api.js"
    import Description from "../../components/Description.vue"
    import Button from "../../components/Button.vue"
   
    export default {
        name: 'ClientCadastro',
        data(){
            return{
                form: {
                    name: '',
                    email:'',
                    password: '',
                    type: 'CLIENT',
                }
            }
        },
           methods: {
         async submitForm(e) {
                try {
                    e.preventDefault()
              await api.post('/users', this.form) 
              alert("Cadastrado com sucessoo!")
              this.$router.push('/client-login');
           } catch (error) {
               alert("Erro ao cadastrar usuário!")
           }
      },
      
    },
        components: {
            // Form,
            Description,
            Button
        }


    }
</script>

<style scoped>
    .container {
        height: 100vh;
        background: #ecf0f1;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .content {
        height: 80%;
        width: 70%;
        display: flex;
    }

    .content-left {
        background-color: #4E5FCD;
        width: 45%;
        display: flex;
        flex-direction: column;
        align-content: stretch;
        justify-content: center;
        align-items: center;
    }

    .content-rigth {
        background-color: #fff;
        width: 55%;
        display: flex;
        flex-direction: column;
        align-content: stretch;
        justify-content: center;
        align-items: center;

    }

    .description {
        text-align: center;
        margin-bottom: 20px;
    }

    h1 {
        font-size: 25px;
        color: #4E5FCD;
        margin-bottom: 30px;


    }
    .form {
    display: flex;
        justify-content: center;
        align-items: center;
    }

    
</style>