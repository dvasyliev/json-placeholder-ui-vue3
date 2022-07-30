import { http } from '@/shared/services/http'

export const getUsers = () => {
  return http.get(`/users`)
}
