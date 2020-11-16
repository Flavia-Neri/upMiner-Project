<template>
    <div class="cards">
        <div v-for="item in showList" :key="item.id">
            <div class="card main" style="width: 18rem;" >
                <div class="card-body cbody ">
                    <font-awesome-icon :icon="['fas',item.img]" />
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.text }}</p>
                </div>
                <a href="#" v-b-modal.modal-describe v-on:click="describe(item.id)" class="btn btn-primary botao-card">
                    <span>R$ {{ item.value }}</span>
                    <b>Saiba mais</b>
                </a>
            </div>
        </div>
        <div>
            <b-modal id="modal-describe" centered header-class="headerModal">
                <template #modal-header="{}" >
                    <div>
                        <font-awesome-icon :icon="['fas', iconeModal]" />
                        <strong>{{ tituloModal }}</strong>
                    </div>
                </template>

                <p><b>Descrição: </b>{{ textoModal }}</p>
                <p><b>Valor: </b>{{ new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(valorModal) }}</p>
                <p><b>Populariedade: </b>{{ populariedadeModal }}</p>
                <p><b>Data de criação: </b>{{ dataModal.split('-').reverse().join('/') }}</p>

                <template #modal-footer={}>
                    <div></div>
                </template>
            </b-modal>
        </div>
    </div>
</template>

<script>
    import Items from '@/config/products.json';

    function filteredList(array, filter) {
        return array.filter(item=> item.img === filter);
    }
    function sortedList(array, sort){
        let arraySorted = [];
        if(typeof array[0][sort] == 'number'){
            arraySorted = array.sort((a, b)=> {
                return a[sort] - b[sort]
            });
        }else if(typeof array[0][sort] == 'string' && new Date(array[0][sort]) != "Invalid Date"){
            arraySorted = array.sort((a,b)=>{
                return new Date(b[sort]) - new Date(a[sort])
            });
        }else{
            arraySorted = array.sort((a,b)=>{
                if(a[sort] < b[sort]){
                    return -1;
                }
                if(a[sort] > b[sort]){
                    return 1;
                }
                return 0;
            });
        }
        return arraySorted;
    }

    export default {
        name: 'Cards',
    
        data(){
            return {
                items: Items,
                dataFilter: '',
                dataSort: '',
                tituloModal: '',
                textoModal: '',
                iconeModal: '',
                valorModal: '',
                populariedadeModal: '',
                dataModal: ''
            }
        },
        props: {
            filter: {
                type: String,
                default: ''
            },
            sort: {
                type: String,
                default: ''
            }
        },
        computed: {
            showList(){
                let returned = Items;
                if(this.dataFilter != '' && this.dataFilter != 'globe'){
                    returned = filteredList(returned, this.dataFilter)
                }
                if(this.dataSort != 0){
                    returned = sortedList(returned, this.dataSort)
                }
                return returned
            },
        },
        watch: { 
            filter: function (newVal) {
                this.dataFilter = newVal;
            },
            sort: function (newVal) {
                this.dataSort = newVal;
            }
        },
        methods: {
            describe(id){
                const produto = Items.find(item=> item.id === id)

                this.tituloModal = produto.title;
                this.textoModal = produto.text;
                this.iconeModal = produto.img;
                this.valorModal = produto.value;
                this.populariedadeModal = produto.popularity;
                this.dataModal = produto.createdDate;
            },
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

    #modal-describe{
        background: red;
        .headerModal{
            div{
                display: flex;
                align-items: center;
                justify-content: flex-start !important;
                svg{
                    margin-right: 20px;
                    width: 30px;
                    height: 30px;
                    *{
                        fill: #f0690a;
                    }
                }
                strong{
                    font-size: 20px;
                    font-weight: 400;
                    text-transform: uppercase;
                }
            }
        }
        .modal-footer{
            .btn-secondary{
                background-color:#000;
                opacity:0.5;
                border-color:#000;
                color:#f0690a;
            }
            button.btn-primary{
                background-color:#f0690a !important;
                border-color:#f0690a !important;
            }
        }
    }
</style>