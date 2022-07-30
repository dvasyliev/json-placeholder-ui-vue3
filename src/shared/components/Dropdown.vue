<template>
  <div ref="target" class="Dropdown" :class="{ isActive }">
    <div class="Dropdown-trigger" @click="onToggle">
      <slot name="trigger" />
    </div>

    <div v-if="isActive" class="Dropdown-menu">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const target = ref(null)
const isActive = ref(false)

function onToggle() {
  isActive.value = !isActive.value
}

onClickOutside(target, () => {
  if (isActive.value) {
    isActive.value = !isActive.value
  }
})
</script>

<style lang="scss" scoped>
.Dropdown {
  position: relative;
  user-select: none;

  &-trigger {
    cursor: pointer;
  }

  &-menu {
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 120px;
    margin-top: 8px;
  }
}
</style>
