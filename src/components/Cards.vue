<template>
    <div class="cards">
        <div v-for="item in filteredList" :key="item.id">
            <div class="card main" style="width: 18rem;" >
                <div class="card-body cbody ">
                     <font-awesome-icon :icon="['fas',item.img]"/>
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.text }}</p>
                </div>
                <a href="#" class="btn btn-primary botao-card">
                    <span>R$ {{ item.value }}</span>
                    <b>Saiba mais</b>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Items from '@/config/products.json';

    export default {
        name: 'Cards',
        data(){
            return {
                items: Items,
                dataFilter: ''
            }
        },
        props: {
            filter: {
                type: String,
                default: ''
            }
        },
        computed: {
            filteredList() {
                let returned = [];
                if(this.dataFilter == '' || this.dataFilter == 'globe'){
                    returned = Items;
                }else{
                    returned = Items.filter(item=> item.img === this.dataFilter);
                }
                return returned;
            }
        },
        watch: { 
            filter: function (newVal) {
                this.dataFilter = newVal;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cards {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .card.main {
            border-radius: 5px;
            width: 305px !important;
            border: none;
            box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.06);
            transition: all 0.4s ease;
            margin-bottom: 55px;

            .cbody {
                width: 100%;
                height: 265px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                padding: 0 25px;

                svg {
                    color: #ff8e49;
                    font-size: 33px;
                    margin:0 auto;
                    margin-bottom: 27px;
                }

                h5 {
                    font-size: 20px;
                    color: #444;
                    font-weight: 400;
                    line-height: 1;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 13px;
                    color: #9e9e9e;
                    font-weight: Medium;
                }
            }

            .botao-card {
                height: 53px;
                font-size: 22px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 0 0 5px 5px;
                border: none;
                background-image: linear-gradient(51deg, #ff8e49, #f0690a, #ff8e49);
                background-size: 200% 100%;
                transition: all 0.3s;

                &:hover {
                    background-position: 100%;
                }

                &:focus,
                &:active {
                    box-shadow: none !important;
                }

                b {
                    font-size: 18px;
                    font-weight: bold;
                }
            }

            &:hover{
                box-shadow: 0 3px 18px rgba(0,0,0,0.3);
                transform: scale(1.02);
            }
        }
        >div:nth-of-type(4n){
            .card.main {
                margin-right: 0;
            }
        }

        @media screen and (min-width: 768px){
            width: 1330px;
            justify-content: flex-start;
            .card.main{
                margin-right: 35px;
            }
            >div:nth-of-type(4n){
                .card.main {
                    margin-right: 0;
                }
            }
        }
    }
</style>