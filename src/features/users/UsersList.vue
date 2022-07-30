<template>
  <div class="UserList">
    <div
      v-for="user in $props.users"
      :key="user.id"
      class="UserList-item"
      @click="onSelect(user.id)"
    >
      <Avatar :name="user.name" />
      {{ user.name }}
    </div>
  </div>
</template>

<script setup>
import { Avatar } from '@/shared/components/Avatar'

const $props = defineProps({
  users: { type: Array, default: () => [] },
})

const $emit = defineEmits(['select'])

function onSelect(userId) {
  $emit('select', { userId })
}
</script>
