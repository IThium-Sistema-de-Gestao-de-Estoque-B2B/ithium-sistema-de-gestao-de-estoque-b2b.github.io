import config from '@/http/config' 
import axios from 'axios'

export default {
    login({ commit }, data){
        return new Promise((resolve, reject) => {
            axios.post(`${config.url}/login`, data, {
                headers: config.headerWithoutToken
            })
            .then(response => {
                commit('SET_LOGGED_USER', {
                    token: response.data.token,
                    user: response.data.user
                })
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}