import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import axios from 'axios'

Vue.prototype.$http = axios;

import {library} from '@fortawesome/fontawesome-svg-core'
import {faSave, faFile, faFileCode, faCopy, faCamera} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faSave, faFile, faFileCode, faCopy, faCamera);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
