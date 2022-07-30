<template>
  <h3>Choose your user</h3>
  <UserList :users="users" @select="onSelectUser" />
  <button @click="$router.back()">Back</button>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { UserList, useUserStore } from '@/features/User'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const { users } = storeToRefs(userStore)

userStore.getUsers()

function onSelectUser({ userId }) {
  userStore.setUser(userId)
  router.push({ name: 'posts' })
}
</script>
