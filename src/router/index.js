import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(`AQUI: ${(!to.meta.requiresAuth && !store.state.token)}`)
  if(to.meta.requiresAuth && !store.state.token)
    router.push({ name: 'Login' }) //path: 'login/:codigo'
  console.log(from.matched.some(x => x.meta.requiresAuth))
  next()
  // if (to.matched.some(record => !!record.meta.requiresAuth)) {
  //   next({ path: '/integracao/:codigo' })
  // }
})

export default router
