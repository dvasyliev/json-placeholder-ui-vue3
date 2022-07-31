import { computed } from 'vue'
import {
  getPage,
  getSize,
  getOffset,
  getPageNumbers,
  getIsFirstPage,
  getIsLastPage,
} from './paginationUtil'

export const usePagination = ({ limit, offset, total, pageChangeHandler } = {}) => {
  const from = computed(() => offset.value + 1)
  const to = computed(() => offset.value + limit.value)

  const page = computed(() => getPage(offset.value, limit.value))
  const size = computed(() => getSize(total.value, limit.value))
  const pageNumbers = computed(() => getPageNumbers(size.value))

  const isFirstPage = computed(() => getIsFirstPage(page.value))
  const isLastPage = computed(() => getIsLastPage(page.value, size.value))

  function goPrevPage() {
    return pageChangeHandler({ limit: limit.value, offset: getOffset(page.value - 1, limit.value) })
  }

  function goPage(pageNumber) {
    return pageChangeHandler({ limit: limit.value, offset: getOffset(pageNumber, limit.value) })
  }

  function goNextPage() {
    return pageChangeHandler({ limit: limit.value, offset: getOffset(page.value + 1, limit.value) })
  }

  return {
    from,
    to,
    total,

    page,
    pageNumbers,
    isFirstPage,
    isLastPage,

    goPrevPage,
    goPage,
    goNextPage,
  }
}
