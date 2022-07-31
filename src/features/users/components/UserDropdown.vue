<template>
  <Dropdown v-if="user">
    <template #trigger><Avatar :name="user.name" /></template>
    <List :items="items" />
  </Dropdown>

  <router-link v-else :to="{ name: 'welcome' }" style="text-decoration: none">Welcome</router-link>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import Avatar from '@/shared/components/Avatar'
import Dropdown from '@/shared/components/Dropdown.vue'
import List from '@/shared/components/List.vue'
import { useUsersStore } from '../usersStore'

const router = useRouter()
const usersStore = useUsersStore()

const { user } = storeToRefs(usersStore)

const items = [
  { key: 'profile', label: 'Profile', action: () => router.push({ name: 'profile' }) },
  { key: 'sign-out', label: 'Sign Out', action: () => router.push({ name: 'sign-out' }) },
]
</script>
