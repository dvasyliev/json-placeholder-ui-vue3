<template>
  <div class="Avatar" :class="avatarClass" :style="avatarStyle">
    <span class="Avatar-abbreviation">{{ abbreviature }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { nameIntoAbbreviation, getColorDataByName } from './avatarUtil'

const $props = defineProps({
  name: { type: String, default: '' },
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['small', 'medium', 'large'].includes(value)
    },
  },
})

const abbreviature = computed(() => nameIntoAbbreviation($props.name))
const colorData = computed(() => getColorDataByName($props.name))

const avatarClass = computed(() => ({
  [`Avatar--${$props.size}`]: true,
}))

const avatarStyle = computed(() => ({
  backgroundColor: colorData.value.backgroundColor,
  color: colorData.value.color,
}))
</script>

<style lang="scss" scoped>
.Avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &--small {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }

  &--medium {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }

  &--large {
    width: 48px;
    height: 48px;
    font-size: 16px;
  }

  &-abbreviation {
    line-height: 1;
  }
}
</style>
