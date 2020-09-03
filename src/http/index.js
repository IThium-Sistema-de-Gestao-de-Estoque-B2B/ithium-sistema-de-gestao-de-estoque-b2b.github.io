import axios from 'axios'

// Consts
const url = 'https://guarded-headland-11685.herokuapp.com/'
const token = 'teste-token-teste'

// Headers
const headersToken = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
    } 
}

const tokenlessHeader = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    } 
}

const http = {
    getToken(route){
        return axios({
            method: 'get',
            url: `${url}${route}`,
            headers: headersToken,
        })
    },
    
    getWithoutToken(route = ''){
        return axios({
            method: 'get',
            url: `${url}${route}`,
            headers: tokenlessHeader,
        })
    },

    getById(route, id){
        return axios({
            method: 'get',
            url: `${url}${route}${id}`,
            headers: headersToken,
        })
    },
    
    post(route, data){
        return axios({
            method: 'post',
            url: `${url}${route}`,
            headers: headersToken,
            data: data
        })
    },
    
    put(route, data){
        return axios({
            method: 'put',
            url: `${url}${route}`,
            headers: headersToken,
            data: data
        })
    },
    
    delete(route, data){
        return axios({
            method: 'delete',
            url: `${url}${route}`,
            headers: headersToken,
            data: data
        })
    }
}

export default http