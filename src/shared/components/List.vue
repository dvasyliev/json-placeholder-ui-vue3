<template>
  <div class="List">
    <div v-for="item in $props.items" :key="item.key" class="List-item" @click="item?.action()">
      {{ item.label }}
    </div>
  </div>
</template>

<script setup>
const $props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.List {
  padding: 8px 0;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 0px 2px #dedee0;

  &-item {
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #f3f4f6;
    }
  }
}
</style>
