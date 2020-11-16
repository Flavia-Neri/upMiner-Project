<template>
	<nav class="navbar navbar-expand-lg navbar-light" id="menu">
		<ul class="navbar-nav">
            <li v-for="(item, index) in nav" :key="index" class="nav-item" v-on:click="setFilter(item.icon)">
                <font-awesome-icon :icon="['fas', item.icon]" />
                <a class="nav-link" href="#">{{item.text}}</a>
            </li>
		</ul>
	</nav>
</template>

<script>
    import Nav from '@/config/navigation.json';
    import Items from '@/config/products.json';

    export default {
        data(){
            return{
                nav: Nav,
                items: Items,
            }
        },
        props: {
            setFilter: {
                type: Function,
                default: () => {}
            }
        },
    }
</script>

<style lang="scss">
    #menu {
        background: #fff;

        ul {
            width: 97%;
            max-width: 1325px;
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;

            li {
                border-right: 1px solid #ececec;
                background: #f9f9f9;
                width: calc(100% / 3 - 4px);
                height: 100px;
                margin-bottom: 4px;
                margin-right: 4px;
                border: 1px solid #ececec;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                transition: 0.3s all;

                svg {
                    width: 23px;
                    height: 23px;
                    margin-bottom: 5px;

                    * {
                        fill: #696969;
                    }
                }

                a {
                    font-size: 14px;
                    color: #696969;
                    line-height: 1;
                }

                &:hover {
                    border-radius: 5px;
                    background-color: #f26f14;
                    border-color: #f26f14;
                    box-shadow: 0px 0px 8.6px 1.4px rgba(168, 162, 153, 0.69);

                    svg {
                        * {
                            fill: #fff;
                        }
                    }

                    a {
                        color: #fff;
                    }
                }
            }
        }

        @media screen and (min-width: 768px){
            ul{
                height: 84px;
                flex-direction: row;
                flex-wrap: nowrap;
                li{
                    width: 100%;
                    margin: 0;
                    &:last-of-type{
                        border-radius: 0 5px 5px 0;
                    }
                    &:first-of-type{
                        border-radius: 5px 0 0 5px;
                    }
                }
            }
        }
    }
</style>