<template>
    <div class="containerSelect">
        <div class="selectDiv">
            <b>ORDENAR</b>
            <select>
                <option>Lançamento</option>
                <option>Popularidade</option>
                <option>Criação</option>
            </select>
        </div>
    </div>
</template>

<style lang="scss">
    .containerSelect {
        display: flex;
        width: 100%;

        .selectDiv {
            display: flex;
            width: 90%;
            align-items: center;
            max-width: 1325px;
            margin: 37px auto;

            b {
                font-size: 15px;
                margin-right: 20px;
            }

            select {
                width: 220px;
                height: 35px;
                border-radius: 5px;
                border: 2px solid #eaeaea;
                appearance: none;
                background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5                         5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
                background-repeat: no-repeat;
                background-position: right;
                padding-left: 14px;
            }
        }

        @media screen and (min-width: 768px){
            .selectDiv{
                width: 95%;
            }
        }
    }
</style>