const Welcome = import(/* webpackChunkName: "welcome" */ '@/pages/Welcome.vue')
const Login = import(/* webpackChunkName: "login" */ '@/pages/Login.vue')

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
]
