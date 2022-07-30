<template>
  <AppLayout v-if="$route.meta.layout === 'AppLayout'">
    <template #logo><Logo /></template>
    <template #navigation><Navigation /></template>
    <template #profile><UserDropdown /></template>
    <template #default><router-view /></template>
  </AppLayout>
  <router-view v-else />
</template>

<script setup>
import AppLayout from '@/shared/layouts/AppLayout.vue'
import Logo from '@/shared/views/Logo.vue'
import UserDropdown from '@/features/users/UserDropdown.vue'
import Navigation from '@/shared/views/Navigation.vue'
</script>
