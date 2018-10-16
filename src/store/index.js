import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import register_store from './register_store.js'
import login_store from './login_store.js'

export default new vuex.Store({
    strict: true,  //严格模式
    modules: {
        register: register_store,
        login: login_store
    }
})