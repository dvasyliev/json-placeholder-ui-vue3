<template>
  <h2>Posts</h2>
  <PostList :posts="posts" />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePostsStore, PostList } from '@/features/posts'

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

postsStore.getPosts()
</script>
