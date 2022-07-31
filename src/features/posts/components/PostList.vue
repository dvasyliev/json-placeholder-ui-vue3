<template>
  <div class="PostList">
    <div
      v-for="post in $props.posts"
      :key="post.id"
      class="PostList-item"
      @click="onClick(post.id)"
    >
      <div class="PostList-content">
        <h4 class="PostList-title">{{ post.title }}</h4>
        <p class="PostList-body">{{ post.body }}</p>
      </div>

      <div class="PostList-arrow">
        <span class="material-icons">arrow_forward_ios</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const $props = defineProps({
  posts: { type: Array, default: () => [] },
})

const $emit = defineEmits(['click'])

function onClick(postId) {
  $emit('click', { postId })
}
</script>

<style lang="scss" scoped>
.PostList {
  &-item {
    display: flex;
    max-width: 100%;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0px 0px 2px #dedee0;
    background-color: #ffffff;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  &-content {
    overflow: hidden;
  }

  &-title {
    margin: 0;
    color: #363f4c;
  }

  &-body {
    margin: 12px 0 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #59626f;
  }

  &-arrow {
    display: flex;
    align-items: center;
    margin-left: 12px;
    color: #9da5b1;

    span {
      font-size: 20px;
    }
  }
}
</style>
