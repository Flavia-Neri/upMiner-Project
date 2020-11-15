import Vue from 'vue';
import Router from 'vue-router';

import Knowmore from '@/Pages/Knowmore';
import Home from '@/Pages/Home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/knowmore",
            name: "Knowmore",
            component: Knowmore
        },
        {
            path: "*",
            name:"Home",
            component: Home
        },
    ]
})