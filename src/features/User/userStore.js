import { defineStore } from 'pinia'
import find from 'lodash/find'
import { getUsers } from './userService'

const initialState = {
  user: null,
  users: [],
}

export const useUserStore = defineStore('user', {
  state: () => initialState,
  actions: {
    async getUsers() {
      try {
        const { data } = await getUsers()

        this.users = data
      } catch (error) {
        return error
      }
    },

    setUser(userId) {
      const user = find(this.users, { id: userId })

      this.user = user
    },

    resetUser() {
      this.user = null
    },
  },
  persist: {
    key: 'userStore',
    paths: ['user'],
  },
})
