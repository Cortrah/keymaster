import Vue from 'vue'
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import * as uiv from 'uiv';

import store from './store'
import router from './router'
import OwnerListApp from './OwnerListApp.vue'

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(uiv);
Vue.use(Vuex);
Vue.use(router);
Vue.use(VeeValidate, {
    classes: true,
    validity: true,
    aria: true,
});

const appView = new Vue({
    router,
    store,
    render: h => h(OwnerListApp)
}).$mount('#ownerListApp');

// For end to end testing
if (window.Cypress) {
    window.app = appView;
}
store.dispatch('onInit', appView);