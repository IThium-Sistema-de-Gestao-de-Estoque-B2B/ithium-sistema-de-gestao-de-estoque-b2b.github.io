import axios from 'axios'

// Consts
const url = 'http://localhost:8000/'
const token = ''

// Headers
const tokenlessHeader = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    } 
}

const headersToken = {
    headers: {
        ...tokenlessHeader.headers,
        Authorization: `Bearer ${token}`
    } 
}

const http = {
    get(route){
        return axios({
            method: 'GET',
            url: `${url}${route}`,
            headers: headersToken,
        })
    },
    
    getWithoutToken(route = ''){
        return axios({
            method: 'GET',
            url: `${url}${route}`,
            headers: tokenlessHeader,
        })
    },

    getById(route, id){
        return axios({
            method: 'GET',
            url: `${url}${route}${id}`,
            headers: headersToken,
        })
    },
    
    post(route, data){
        return axios({
            method: 'POST',
            url: `${url}${route}`,
            headers: headersToken,
            data: data
        })
    },

    postWithoutToken(route, data){
        return axios({
            method: 'POST',
            url: `${url}${route}`,
            headers: tokenlessHeader,
            data: data
        })
    },
    
    put(route, data){
        return axios({
            method: 'PUT',
            url: `${url}${route}`,
            headers: headersToken,
            data: data
        })
    },
    
    delete(route, data){
        return axios({
            method: 'DELETE',
            url: `${url}${route}`,
            headers: headersToken,
            data: data
        })
    }
}

export default http