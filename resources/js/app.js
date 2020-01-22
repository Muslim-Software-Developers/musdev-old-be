import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router/index'
import App from './views/App'
//import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
//import 'vuetify/dist/vuetify.min.css'
import store from './Store/store'
//import Home from './components/Home'
//import VueYouTubeEmbed from 'vue-youtube-embed'
//import Panel from './components/Globals/Panel'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

sync(store, router)

const app = new Vue({ 
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
