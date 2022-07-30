<template>
  <nav class="Navigation">
    <ul class="Navigation-items">
      <router-link
        v-for="item in navigation"
        :key="item.key"
        :to="{ name: item.name }"
        class="Navigation-item"
        :class="{ isActive: isActive(item.name) }"
      >
        <div class="Navigation-icon">
          <span class="material-icons-outlined">{{ item.icon }}</span>
        </div>

        <div class="Navigation-name">
          {{ item.label }}
        </div>
      </router-link>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const navigation = [
  { name: 'posts', label: 'Posts', icon: 'article' },
  { name: 'albums', label: 'Albums', icon: 'perm_media' },
  { name: 'todos', label: 'Todos', icon: 'inventory' },
]

const route = useRoute()

function isActive(name) {
  return name === route.name
}
</script>

<style lang="scss" scoped>
.Navigation {
  &-items {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &-item {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
    user-select: none;

    &:hover,
    &.isActive {
      background-color: #3730a3;
    }

    &.isActive {
      cursor: default;
      pointer-events: none;
    }

    &:not(:last-of-type) {
      margin-bottom: 4px;
    }
  }

  &-icon {
    margin-right: 16px;
    line-height: 1;
    color: #a5b4fc;
  }

  &-name {
    line-height: 1;
  }
}
</style>
