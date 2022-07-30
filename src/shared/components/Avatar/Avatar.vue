<template>
  <div class="Avatar" :style="avatarStyle">
    <span class="Avatar-abbreviation">{{ abbreviature }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { nameIntoAbbreviation, getColorDataByName } from './avatarUtil'

const $props = defineProps({
  name: { type: String, default: '' },
})

const abbreviature = computed(() => nameIntoAbbreviation($props.name))
const colorData = computed(() => getColorDataByName($props.name))
const avatarStyle = computed(() => ({
  backgroundColor: colorData.value.backgroundColor,
  color: colorData.value.color,
}))
</script>

<style lang="scss" scoped>
.Avatar {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &-abbreviation {
    line-height: 1;
  }
}
</style>
