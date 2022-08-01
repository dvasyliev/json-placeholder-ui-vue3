<template>
  <template v-if="isPostsLoading">Loading...</template>
  <template v-if="isPostsReady">
    <template v-if="postsError">
      {{ postsError }}
    </template>

    <template v-else>
      <h2>Posts</h2>
      <PostList :posts="posts" />
      <Pagination
        :limit="Number(postsQuery.limit)"
        :offset="Number(postsQuery.offset)"
        :total="postsTotalCount"
        @change="setPostsQuery"
      />
    </template>
  </template>
</template>

<script setup>
import Pagination from '@/shared/components/Pagination'
import { PostList, usePostsState } from '@/features/posts'

const {
  getPosts,
  posts,
  postsTotalCount,
  isPostsReady,
  isPostsLoading,
  postsError,
  postsQuery,
  setPostsQuery,
} = usePostsState()

getPosts()
</script>
