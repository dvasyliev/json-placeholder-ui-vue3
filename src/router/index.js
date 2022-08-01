import { createWebHistory, createRouter } from 'vue-router'
import { routes } from './routes.js'
import { authGuard } from './guards'

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { top: 0 }
  }
}

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior,
  routes,
})

router.beforeEach(async (to, from, next) => {
  await authGuard(to, from, next)
})
