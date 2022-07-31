import { defineStore } from 'pinia'
import { getPosts } from './postsService'

const initialState = {
  user: null,
  posts: [],
  postsTotal: 0,
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
        const { data, headers } = await getPosts(this.postsParams)

        this.posts = data
        this.postsTotal = Number(headers['x-total-count'])
      } catch (error) {
        return error
      }
    },

    setPostsParams(params) {
      this.postsParams = { ...this.postsParams, ...params }
    },
  },
})
