import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    token: null,
    user: {}
}


const mutations = {
    SET_LOGGED_TOKEN(state, access_token){
        state.token = access_token
    },
    SET_LOGGED_USER(state, user){
        state.user = user
    },
    CLEAR(state){
        state.token = null
        state.user = {}
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions: {}
})