import { useUserStore, USER_ACCESS } from '@/features/User'

export const authGuard = async (to, from, next) => {
  const userStore = useUserStore()
  const isAuthenticated = !!userStore.user

  // Guest tries visit user page
  if (!isAuthenticated && to.meta.access === USER_ACCESS.user) {
    next({ name: 'sign-in' })
  }

  // User tries visit guest page
  if (isAuthenticated && to.meta.access === USER_ACCESS.guest) {
    next({ name: 'posts' })
  }

  next()
}
