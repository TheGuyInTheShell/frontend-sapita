import { createRouter, createWebHistory } from 'vue-router'
import AppRoutes from '../modules/app/router/index'
import LoginRoutes from '../modules/login/router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: ()=> import('../view/HomeLayout.vue'),
    },
    ...AppRoutes,
    ...LoginRoutes,
  ]
})

router.beforeEach((to) => {
  if (to.path.startsWith('/app')) {
      if (localStorage.getItem('session_hash')) {
        return true
      }
      return {name: 'login'}
    }

    return true
  }
)

export default router
