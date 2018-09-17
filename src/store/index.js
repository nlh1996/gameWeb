import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import register_store from './register_store.js'

export default new vuex.Store({
    modules: {
        register: register_store
    }
})