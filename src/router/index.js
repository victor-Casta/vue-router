import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import notFound from '../views/404View.vue'

const stage = import.meta.env.VITE_STAGE

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // Redireccion en rutas: { path: '/home', redirect: { name: 'home' } },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    },
    {
      path: '/404',
      component: notFound
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: ['/home', '/init', '/principal'],
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/session',
      component: () => import('../views/SessionView.vue'),
      children: [
        {
          path: '',
          components: {
            default: () => import('../views/LoginView.vue'),
            register: () => import('../views/RegisterView.vue')
          }
        }
      ]
    },
    {
      path: '/chats',
      name: 'chats',
      component: () => import('../views/ChatsView.vue'),
      children: [
        {
          path: ':chatId(\\d+)',
          component: () => import('../views/ChatView.vue'),
          props: (route) => (
            { chatId: route.params.chatId }
          )
        },
      ],
      meta: {
        requiresAuth: true,
        roles: ['admin']
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

if (stage === 'test') {
  router.addRoute({
    path: '/profile',
    component: () => import('../views/ProfileView.vue')
  })
}

router.beforeEach((to, from) => {
  // if (to.meta?.requiresAuth && to.meta?.roles.includes('admin')) {
  //   return '/session'
  // }

  // if (to.path === '/') return { name: 'about' }
  return true
})

export default router
