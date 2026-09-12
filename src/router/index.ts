import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'
import Dashboard from '@/views/auth/Dashboard.vue'
import NotFound from '@/views/404.vue'
import ServerError from '@/views/500.vue'
import { useAuthStore } from '@/store/auth.ts'
import PostIndex from '@/views/posts/PostIndex.vue'
import PostCreate from '@/views/posts/PostCreate.vue'
import PostView from '@/views/posts/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { requiresGuest: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresGuest: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/posts',
      name: 'PostIndex',
      component: PostIndex,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/posts/create',
      name: 'PostCreate',
      component: PostCreate,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/posts/:id',
      name: 'PostView',
      component: PostView,
      meta: { requiresAuth: true },
      props: true
    },
    {
      path: '/500',
      name: 'server-error',
      component: ServerError,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if(to.matched.some((record) => record.meta.requiresAuth) && !auth.isLoggedIn)
    next({name: "login"});
  else if (to.matched.some((record) => record.meta.requiresGuest) && auth.isLoggedIn)
    next({name: "dashboard"});
  else
    next();
})

export default router