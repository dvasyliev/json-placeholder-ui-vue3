const Welcome = import(/* webpackChunkName: "welcome" */ '@/pages/Welcome.vue')

const SignIn = import(/* webpackChunkName: "sign-in" */ '@/pages/SignIn.vue')
const SignOut = import(/* webpackChunkName: "sign-out" */ '@/pages/SignOut.vue')

const Profile = import(/* webpackChunkName: "profile" */ '@/pages/Profile.vue')

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
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '/sign-out',
    name: 'sign-out',
    component: SignOut,
  },

  {
    path: '/profile',
    name: 'profile',
    component: Profile,
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
