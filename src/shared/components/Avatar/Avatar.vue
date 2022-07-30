<template>
  <div class="Avatar">
    <span class="Avatar-abbreviation">{{ abbreviature }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { nameIntoAbbreviation } from './avatarUtil'

const $props = defineProps({
  name: { type: String, default: '' },
})

const abbreviature = computed(() => nameIntoAbbreviation($props.name))
</script>

<style lang="scss" scoped>
.Avatar {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid black;

  &-abbreviation {
    color: black;
    font-weight: bold;
  }
}
</style>
