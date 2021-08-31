<template>
    <article>
            <h2 class="title title-second">{{title}}</h2>
            <div class="description">
                <p >{{content}}</p>
            </div>
    </article>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "Welcome"
            },
            content:{
                type: String,
                default: "text"
            }
            
        }

    }
</script>

<style scoped>
    article {
        /* margin-bottom: 230px; */
        margin-top: 10px;
        font-weight: lighter;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title-second {
        color: #fff;
    }

    .title {
        font-size: 30px;
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 15px;
    }

    .description {
        font-size: 20px;
        font-weight: 300;
        color: #fff;
        line-height: 45px;
        padding: 5px;
    }
    
</style>