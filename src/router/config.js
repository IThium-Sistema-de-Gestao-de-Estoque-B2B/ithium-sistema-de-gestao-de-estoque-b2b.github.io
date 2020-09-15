// Confuguração de rotas para o Router
const routes = [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login/Login')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/Home')
    },
    {
      path: '/consultas',
      name: 'Consultas',
      component: () => import('@/views/consultas/Consultas')
    },
  ]

export default routes