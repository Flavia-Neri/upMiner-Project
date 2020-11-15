<template>
    <main>
        <div class="jumbotron banner main" v-bind:style="{backgroundImage: 'url('+require('../../assets/bannermain.jpeg')+')'}">
            <div class="content">
                <section>
                    <div class="titleMain">
                        <div class="logo">
                            <img :src="require('../../assets/lgmain.png')">
                        </div>
                        <h1 class="display-4 titleBanner">Histórico Empresarial</h1>
                    </div>
                    <p class="lead textBanner">O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos
                        os fatos e acontecimentos relevantes de uma empresa desde o seu ano
                        de fundação.</p>
                    <div class="infosBanner">
                        <div class="infosBanner-text">
                            <span>R$</span>40,00
                        </div>
                        <router-link class="btn btn-primary btn-lg botao" to="/knowmore" role="button">Saiba mais</router-link>
                    </div>
                </section>
            </div>
        </div>
        <Nav />
        <Select />
        <Cards />
    </main>
</template>

<script>
    import Vue from 'vue';
    import VueRouter from "vue-router";

    //components
    import Nav from "@/components/Nav.vue";
    import Select from "@/components/Select.vue";
    import Cards from "@/components/Cards.vue";

    Vue.use(VueRouter);
    export default{
        name: 'Home',
        components:{
            Nav,
            Select,
            Cards
        }
   }     
</script>

<style lang="scss">
.banner {
    width: 100%;
    height: 300px;
    padding: 0 !important;
    border-bottom: 5px solid #f87c2a;
    color: #231f1f;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;

    .content {
        width: 100%;
        max-width: 1195px;
        margin: 0 auto;

        section {
            width: 600px;

            .titleMain {
                width: 500px;
                display: flex;
                align-items: center;

                .logo {
                    display: flex;
                    height: 40px;
                    border-right: 1px solid #231f1f;
                    padding-right: 20px;
                    margin: 20px;
                    align-items: center;
                }
            }
        }

        h1 {
            font-size: 32px;
            font-weight: 400;
            margin:0;
        }

        p {
            font-size: 19px;
            font-weight: 300;
            line-height: 24pt;
        }

        .infosBanner {
            display: flex;
            align-items: center;

            .infosBanner-text {
                font-size: 38px;

                span {
                    font-size: 16px;
                    font-weight: 400;
                    margin-right: 3px;
                }
            }

            .botao {
                width: 112px;
                height: 34px;
                border: none;
                border-radius: 5px;
                background-image: linear-gradient(51deg, #ff8e49, #f0690a, #ff8e49);
                background-size: 200% 100%;
                transition: 0.3s all;
                font-size: 16px;
                font-weight: bold;
                line-height: 1;
                margin-left: 20px;

                &:hover {
                    background-position: 100%;
                }

                &:active,
                &:focus {
                    box-shadow: none !important;
                }
            }
        }
    }

    &.main {
        color: #fff;

        .content {
            section {
                .titleMain {
                    .logo {
                        border-right: 1px solid #fff;
                    }
                }
            }
        }
    }
}
</style>