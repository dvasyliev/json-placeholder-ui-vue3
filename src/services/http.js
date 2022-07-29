import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60 * 1000,
  withCredentials: false,
})
