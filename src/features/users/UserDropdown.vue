<template>
  <Dropdown v-if="user">
    <template #trigger><Avatar :name="user.name" /></template>
    <List :items="items" />
  </Dropdown>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import Dropdown from '@/shared/components/Dropdown.vue'
import Avatar from '@/shared/components/Avatar/Avatar.vue'
import List from '@/shared/components/List.vue'
import { useUsersStore } from './usersStore'

const router = useRouter()
const userStore = useUsersStore()

const { user } = storeToRefs(userStore)

const items = [
  { key: 'profile', label: 'Profile', action: () => router.push({ name: 'profile' }) },
  { key: 'sign-out', label: 'Sign Out', action: () => router.push({ name: 'sign-out' }) },
]
</script>
