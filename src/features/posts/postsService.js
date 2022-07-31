import { http } from '@/shared/services/http'

export const getPosts = (params = {}) => {
  return http.get(`/posts`, { params })
}
