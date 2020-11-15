<template>
    <main>
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
                        <router-link class="btn btn-primary btn-lg botao" to="/" role="button">Saiba mais</router-link>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>
