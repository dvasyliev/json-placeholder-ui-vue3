import { USER_ACCESS } from '@/features/User'
import { LAYOUT_NAMES } from '@/shared/data/layout'

export const routes = [
  {
    path: '/',
    name: 'welcome',
    component: import(/* webpackChunkName: "welcome" */ '@/pages/Welcome.vue'),
    meta: {
      access: USER_ACCESS.guest,
    },
  },

  {
    path: '/sign-in',
    name: 'sign-in',
    component: import(/* webpackChunkName: "sign-in" */ '@/pages/SignIn.vue'),
    meta: {
      access: USER_ACCESS.guest,
    },
  },
  {
    path: '/sign-out',
    name: 'sign-out',
    component: import(/* webpackChunkName: "sign-out" */ '@/pages/SignOut.vue'),
    meta: {
      access: USER_ACCESS.user,
    },
  },

  {
    path: '/profile',
    name: 'profile',
    component: import(/* webpackChunkName: "profile" */ '@/pages/Profile.vue'),
    meta: {
      access: USER_ACCESS.user,
    },
  },

  {
    path: '/posts',
    name: 'posts',
    component: import(/* webpackChunkName: "posts" */ '@/pages/Posts.vue'),
    meta: {
      access: USER_ACCESS.any,
      layout: LAYOUT_NAMES.appLayout,
    },
  },

  {
    path: '/albums',
    name: 'albums',
    component: import(/* webpackChunkName: "albums" */ '@/pages/Albums.vue'),
    meta: {
      access: USER_ACCESS.any,
      layout: LAYOUT_NAMES.appLayout,
    },
  },

  {
    path: '/todos',
    name: 'todos',
    component: import(/* webpackChunkName: "todos" */ '@/pages/Todos.vue'),
    meta: {
      access: USER_ACCESS.any,
      layout: LAYOUT_NAMES.appLayout,
    },
  },

  {
    path: '/:pathMatch(.*)*',
    component: import(/* webpackChunkName: "not-found" */ '@/pages/NotFound.vue'),
  },
]
