// Confuguração de rotas para o Router
const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home/Home')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/home/Home')
    },
    {
      path: '/consultas',
      name: 'Consultas',
      component: () => import('../views/consultas/Consultas')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/Login')
    }
  ]

export default routes