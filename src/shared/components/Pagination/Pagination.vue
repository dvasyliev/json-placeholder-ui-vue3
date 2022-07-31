<template>
  <div class="Pagination">
    <div class="Pagination-info">Showing {{ from }} to {{ to }} of {{ total }} results</div>

    <div class="Pagination-controls">
      <div class="Pagination-buttons">
        <a
          class="Pagination-button --prev"
          :class="{ isDisabled: isFirstPage }"
          href="#"
          @click.prevent="goPrevPage"
        >
          <span class="material-icons">chevron_left</span>
        </a>

        <a
          v-for="pageNumber in pageNumbers"
          :key="pageNumber"
          class="Pagination-button --page"
          :class="{ isActive: page === pageNumber }"
          href="#"
          @click.prevent="goPage(pageNumber)"
        >
          {{ pageNumber }}
        </a>

        <a
          class="Pagination-button --next"
          :class="{ isDisabled: isLastPage }"
          href="#"
          @click.prevent="goNextPage"
        >
          <span class="material-icons">chevron_right</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { usePagination } from './paginationComposable'
import { LIMIT_DEFAULT, OFFSET_DEFAULT, TOTAL_DEFAULT, VISIBLE_DEFAULT } from './paginationData'

const $props = defineProps({
  limit: { type: Number, default: LIMIT_DEFAULT },
  offset: { type: Number, default: OFFSET_DEFAULT },
  total: { type: Number, default: TOTAL_DEFAULT },
  visible: { type: Number, default: VISIBLE_DEFAULT },
})

const $emit = defineEmits(['change'])

function pageChangeHandler(params) {
  $emit('change', params)
}

const { limit, offset, total, visible } = toRefs($props)
const { from, to, page, pageNumbers, isFirstPage, isLastPage, goPrevPage, goPage, goNextPage } =
  usePagination({
    limit,
    offset,
    total,
    visible,
    pageChangeHandler,
  })
</script>

<style lang="scss" scoped>
.Pagination {
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 16px;

  &-info {
    flex-grow: 1;
    color: #6a7280;
  }

  &-buttons {
    display: flex;
  }

  &-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid #dcdfe3;
    background-color: #ffffff;
    color: #6a7280;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }

    &:not(:first-child) {
      margin-left: -1px;
    }

    &.isActive {
      position: relative;
      z-index: 1;
      border: 1px solid #8589f5;
      background-color: #eef2ff;
      color: #8589f5;
    }

    &.isDisabled {
      cursor: default;
      user-select: none;
      pointer-events: none;
      opacity: 0.5;
    }

    &.--prev,
    &.--next {
      text-align: center;
    }

    &.--prev {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &.--next {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
}
</style>
