<template>
  <h2>Posts</h2>
  <PostList :posts="posts" />
  <Pagination
    :limit="postsParams._limit"
    :offset="postsParams._start"
    :total="postsTotal"
    @change="onPageChange"
  />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePostsStore, PostList } from '@/features/posts'
import Pagination from '@/shared/components/Pagination'

const postsStore = usePostsStore()
const { posts, postsTotal, postsParams } = storeToRefs(postsStore)

function onPageChange({ limit, offset }) {
  postsStore.setPostsParams({ _limit: limit, _start: offset })
  postsStore.getPosts()
}

postsStore.getPosts()
</script>
