<template>
    <div class="backtohome">
        <div class="aux">
            <router-link to="/" class="linkto">
                <img :src="require('../assets/arrow.svg')">
                <span>Histórico Empresarial</span>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
.backtohome {
    display: flex;
    width:100%;
    justify-content:center;
    .aux{
        width:58%;
        margin-bottom:45px;
        transition:0.3s ;
        .linkto {
            width:fit-content;
            text-decoration: none;
            display: flex;
            align-items: center;

            img {
                width: 25px;
                height: 25px;
                margin-right: 10px;
                transition:all 0.3s;
            }

            span {
                color: #f0690a;
                font-size: 24px;
                font-weight: 400;
                transition:all 0.3s;
            }
            &:hover{
                img, span{
                 transform: translateY(-5px);
           } 
           span{
               font-size:26px;
           }
           img{
               width:27px;
               height:27px;
           }
        }
        }
    }
}

</style>