import Vue from 'vue';
import {BootstrapVue} from 'bootstrap-vue';

import Router from './router';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

Vue.use( VueSplide );

import { library } from '@fortawesome/fontawesome-svg-core';
import {  
  faGlobe,
  faUniversity,
  faBriefcase,
  faTree,
  faGavel,
  faBan,
  faGlobeAmericas,
  faGem,
  faMale,
  faPiggyBank

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faGlobe);
library.add(faUniversity);
library.add(faBriefcase);
library.add(faTree);
library.add(faGavel);
library.add(faBan);
library.add(faGlobeAmericas);
library.add(faGem);
library.add(faMale);
library.add(faPiggyBank);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')

