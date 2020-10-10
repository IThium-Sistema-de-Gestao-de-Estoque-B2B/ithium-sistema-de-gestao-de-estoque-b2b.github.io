// Confuguração de rotas para o Router
const routes = [
    {
      path: '/login/:codigo',
      name: 'Login',
      component: () => import('@/views/login/Login'),
      meta: { requiresAuth: false }
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/Home'),
      meta: { requiresAuth: true }
    },
    {
      path: '/consultas',
      name: 'Consultas',
      component: () => import('@/views/consultas/Consultas'),
      meta: { requiresAuth: true }
    },
  ]

export default routes