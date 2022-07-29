const Welcome = import(/* webpackChunkName: "welcome" */ '@/views/Welcome.vue')

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
]

export default routes
