const Welcome = import(/* webpackChunkName: "welcome" */ '@/pages/Welcome.vue')
const Login = import(/* webpackChunkName: "login" */ '@/pages/Login.vue')
const Posts = import(/* webpackChunkName: "posts" */ '@/pages/Posts.vue')
const Albums = import(/* webpackChunkName: "albums" */ '@/pages/Albums.vue')
const Todos = import(/* webpackChunkName: "todos" */ '@/pages/Todos.vue')

export const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },

  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    meta: {
      layout: 'AppLayout',
    },
  },

  {
    path: '/albums',
    name: 'albums',
    component: Albums,
    meta: {
      layout: 'AppLayout',
    },
  },

  {
    path: '/todos',
    name: 'todos',
    component: Todos,
    meta: {
      layout: 'AppLayout',
    },
  },
]
