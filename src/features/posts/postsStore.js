import { defineStore } from 'pinia'
import { getPosts } from './postsService'

const initialState = {
  user: null,
  posts: [],
  postsParams: {
    _limit: 10,
    _start: 0,
    userId: null,
  },
}

export const usePostsStore = defineStore('posts', {
  state: () => initialState,
  actions: {
    async getPosts() {
      try {
        const { data } = await getPosts(this.postsParams)

        this.posts = data
      } catch (error) {
        return error
      }
    },
  },
})
