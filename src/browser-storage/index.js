export default {
    setToken(token){
        sessionStorage.setItem('ac_tk', token)
    },
    clear(){
        sessionStorage.clear()
    }
}
