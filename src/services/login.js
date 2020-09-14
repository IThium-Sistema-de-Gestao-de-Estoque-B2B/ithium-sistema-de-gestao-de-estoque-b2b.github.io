import http from '../http/index'


export default {
    login(data = ''){
        return http.postWithoutToken('auth/login', data)
    }
}