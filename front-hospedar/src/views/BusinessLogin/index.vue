<template>
 <div class="container">
        <div class="content">
            <div class="content-left">
                <Description title="Hello, Friend!" content="rem ipsum is placeholder text " class="description" />
                <Button name="Sign Up" to="/business-cadastro"/>
            </div>
            <div class="content-rigth">
                <h1>Sign In To Plataforma</h1>
                <form class="form" @submit="(e) => submitForm(e)">
                    <label for="">
                        <input type="email" id="email" placeholder="Email" v-model="form.email" required/>
                    </label>
                    <label for="">
                        <input type="password" id="senha" placeholder="Password" v-model="form.password" required/>
                    </label>

                    <Button name="Sign in" primaryColor type="submit"/>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../services/api"
import Button from '../../components/Button.vue'
import Description from '../../components/Description.vue'

export default {
  name: 'ClientLogin',
        components: {
            Button,
            Description
        },

        methods: {
            async submitForm(e) {
                try {
                    e.preventDefault()
                    const result = await api.post('/session', this.form)
                    localStorage.setItem('@hospedar-login', JSON.stringify(result.data));
                    alert("Login com sucesso!")
                     this.$router.push(`/entidade-list`);
                } catch (error) {
                    alert("Erro ao tentar login!")
                }
            },

        },

        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },


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
        font-size:25px;
        color: #4E5FCD;
        margin-bottom:30px;
       
        
    }

</style>