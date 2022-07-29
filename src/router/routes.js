const Welcome = import(/* webpackChunkName: "welcome" */ '@/views/Welcome.vue')

export const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
]
