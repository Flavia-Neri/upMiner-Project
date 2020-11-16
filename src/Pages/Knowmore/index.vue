<template>
    <main class="pagekm">
        <div class="jumbotron banner" v-bind:style="{backgroundImage: 'url('+require('../../assets/banner.jpeg')+')'}">
            <div class="content">
                <section>
                    <div class="titleMain">
                        <div class="logo">
                            <img :src="require('../../assets/lgsec.png')">
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
        <BackKm />
        <Slideshow />
        <section class="describe">
            <div class="text-info-km">
                <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos
                    relevantes de uma empresa desde o seu ano de
                    fundação. Tenha acesso aos principais eventos corporativos de uma empresa, como: marcos jurídicos,
                    mudança no quadro societário, aumento de
                    capital,reportagens e muito mais.</p>

                <p>Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações acessíveis ao
                    usuário. A linha do tempo pode também ser
                    exportada no formato PDF.</p>
            </div>
            <div class="infosBanner">
                <div class="infosBanner-text">
                    <span>R$</span>40,00
                </div>
                <router-link class="btn btn-primary btn-lg botao" to="/knowmore" role="button">Habilitar</router-link>
            </div>
        </section>
    </main>
</template>


<style lang="scss">
.pagekm {
    .describe {
        width: 1032px;
        display: flex;
        flex-direction: column;
        margin:0 auto;
        margin-top:40px;
        .text-info-km {
            p {
                font-size: 16px;
                font-weight: 300;
                color: #696969;
            }
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
                width: 130px;
                height: 40px;
                border: none;
                border-radius: 5px;
                background-image: linear-gradient(51deg, #ff8e49, #f0690a, #ff8e49);
                background-size: 200% 100%;
                transition: 0.3s all;
                font-size: 16px;
                font-weight: bold;
                line-height: 1;
                margin-left: 35px;

                &:hover {
                    background-position: 100%;
                }

                &:active,
                &:focus {
                    box-shadow: none !important;
                }
            }
        }.infosBanner {
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
}
</style>

<script>
    import Vue from 'vue';
    import VueRouter from "vue-router";

    //components
    import Slideshow from "@/components/Slideshow.vue";
    import BackKm from "@/components/BackKm.vue";

    Vue.use(VueRouter);
    export default{
        name: 'Knowmore',
        components:{
         Slideshow,
         BackKm
        }
   }     
</script>