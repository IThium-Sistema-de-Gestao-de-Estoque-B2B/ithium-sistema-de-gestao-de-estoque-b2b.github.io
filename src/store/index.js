import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

const state = {
    token: null,
    user: {}
}

const mutations = {
    SET_LOGGED_USER(state, { token, user }){
        state.token = token
        state.user = user
    },
    CLEAR_ALL(state){
        state.token = null
        state.user = {}
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})