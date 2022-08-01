import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60 * 1000,
  withCredentials: false,
})

http.interceptors.request.use((config) => {
  if (config.params.offset) {
    config.params._start = config.params.offset
    delete config.params.offset
  }

  if (config.params.limit) {
    config.params._limit = config.params.limit
    delete config.params.limit
  }

  return config
})
