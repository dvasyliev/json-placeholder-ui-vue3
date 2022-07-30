<template>
  <div class="UsersList">
    <div
      v-for="user in $props.users"
      :key="user.id"
      class="UsersList-item"
      @click="onSelect(user.id)"
    >
      <div class="UsersList-avatar">
        <Avatar :name="user.name" size="large" />
      </div>
      <div class="UsersList-name">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from '@/shared/components/Avatar'

const $props = defineProps({
  users: { type: Array, default: () => [] },
})

const $emit = defineEmits(['select'])

function onSelect(userId) {
  $emit('select', { userId })
}
</script>

<style lang="scss" scoped>
$indent: 6px;
$listMargin: $indent * 2;
$itemMargin: $indent;
$itemHorizontalPadding: $indent * 2;
$itemVerticalPadding: $indent * 4;

.UsersList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: $itemMargin * -1;

  &-item {
    display: flex;
    align-items: center;
    max-width: 260px;
    width: 100%;
    margin: $itemMargin;
    padding: $itemHorizontalPadding $itemVerticalPadding;
    border: 1px solid rgb(205, 205, 205);
    border-radius: 8px;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: rgb(239, 239, 239);
    }
  }

  &-avatar {
    margin-right: 12px;
  }
}
</style>
