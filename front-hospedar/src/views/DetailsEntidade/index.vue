<template>
    <div class="conteiner-card">
        <div class="card">
            <img src="https://images.adsttc.com/media/images/5cf1/f20a/284d/d14f/3800/0264/large_jpg/CASA_FRENTE_MAR_2027.jpg?1559360001"
                alt="Avatar" style="width:100%">
            <div class="body-card">
                <h4><b>{{imovel.name}}</b></h4>
                <h4><b>{{imovel.country}}</b></h4>
                <h4><b>{{imovel.city}}</b></h4>
                
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../services/api'
    export default {
        data() {
            return {
                imovel:{}
            }
        },

        async mounted() {
            const id = this.$route.params.id;
            console.log(id);
            const response = await api.get(`/imoveis/${id}`);
            this.imovel = response.data;

        }
    }
</script>

<style scoped>
    .conteiner-card {
        display: flex;
        align-items: center;
        height: 100vh;
        justify-content: center;

    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 40%;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .body-card {
        padding: 2px 16px;
    }
</style>