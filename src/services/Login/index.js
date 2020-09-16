import http from '@/http'


export default {
    login(data = ''){
        return http.postWithoutToken('auth/login', data)
    }
}