<template>
  <h3>Choose your user</h3>
  <UserList :users="users" @select="onSelectUser" />
  <button @click="$router.back()">Back</button>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { UserList, useUsersStore } from '@/features/users'
import { useRouter } from 'vue-router'

const router = useRouter()
const usersStore = useUsersStore()
const { users } = storeToRefs(usersStore)

usersStore.getUsers()

function onSelectUser({ userId }) {
  usersStore.setUser(userId)
  router.push({ name: 'posts' })
}
</script>
