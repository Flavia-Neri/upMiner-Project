<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="menu">
 <ul class="navbar-nav">
      <li class="nav-item active">
        <font-awesome-icon :icon="['fas', 'globe']" />
        <a class="nav-link" href="#">Todos</a>
      </li>
      <li class="nav-item">
        <font-awesome-icon :icon="['fas', 'briefcase']" />
        <a class="nav-link" href="#">Profissional</a>
      </li>
      <li class="nav-item">
        <font-awesome-icon :icon="['fas', 'university']" />
        <a class="nav-link" href="#">Reguladores</a>
      </li>
    <li class="nav-item">
        <font-awesome-icon :icon="['fas', 'tree']" />
        <a class="nav-link" href="#">Sócio Ambiental</a>
      </li>
    <li class="nav-item">
        <font-awesome-icon :icon="['fas', 'gavel']" />
        <a class="nav-link" href="#">Jurídico</a>
      </li> <li class="nav-item">
        <font-awesome-icon :icon="['fas', 'ban']" />
        <a class="nav-link" href="#">Listas Restritivas</a>
      </li>
   <li class="nav-item">
        <font-awesome-icon :icon="['fas', 'globe-americas']" />
        <a class="nav-link" href="#">Mídia / Internet</a>
      </li>
   <li class="nav-item">
        <font-awesome-icon :icon="['fas', 'gem']" />
        <a class="nav-link" href="#">Bens e Imóveis</a>
      </li>
   <li class="nav-item">
        <font-awesome-icon :icon="['fas', 'male']" />
        <a class="nav-link" href="#">Cadastro</a>
      </li>
   <li class="nav-item">
        <font-awesome-icon :icon="['fas', 'piggy-bank']" />
        <a class="nav-link" href="#">Financeiro</a>
      </li>
    </ul>
</nav>
</template>

<script></script>

<style lang="scss">
    #menu {
      background: #fff;

      ul {
        width: 97%;
        max-width: 1325px;
        height: 84px;
        margin: 0 auto;
        text-align: center;

        li {
          border-right: 1px solid #ececec;
          background: #f9f9f9;
          width: 100%;
          border: 1px solid #ececec;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: 0.3s all;

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
        }
      }
    }
</style>