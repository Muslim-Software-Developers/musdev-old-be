import Vue from 'vue'
import router from './router/index'
import App from './views/App'
//import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
//import 'vuetify/dist/vuetify.min.css'
import store from './Store/store'
import Home from './components/Home'
//import VueYouTubeEmbed from 'vue-youtube-embed'
//import Panel from './components/Globals/Panel'

Vue.config.productionTip = false

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
sync(store, router)

const app = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
