import { useUsersStore, USER_ACCESS } from '@/features/users'

export const authGuard = async (to, from, next) => {
  const usersStore = useUsersStore()
  const isAuthenticated = !!usersStore.user

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
