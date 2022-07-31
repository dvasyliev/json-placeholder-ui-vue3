import { defineStore } from 'pinia'
import find from 'lodash/find'
import { getUsers } from './usersService'

const initialState = {
  user: null,
  users: [],
}

export const useUsersStore = defineStore('users', {
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
      this.user = find(this.users, { id: userId })
    },

    resetUser() {
      this.user = null
    },
  },
  persist: {
    key: 'postsStore',
    paths: ['user'],
  },
})
