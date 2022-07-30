import { createWebHistory, createRouter } from 'vue-router'
import { routes } from './routes.js'
import { authGuard } from './guards'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  await authGuard(to, from, next)
})
