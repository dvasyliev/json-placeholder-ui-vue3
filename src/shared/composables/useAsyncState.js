import { computed } from 'vue'
import { useAsyncState as useAsyncStateCore } from '@vueuse/core'

const OPTIONS_DEFAULT = {
  immediate: false,
}

export const useAsyncState = (promise, initialState = null, options = OPTIONS_DEFAULT) => {
  const { state, isReady, isLoading, error, execute } = useAsyncStateCore(
    promise,
    initialState,
    options,
  )
  const data = computed(() => state.value?.data || [])
  const totalCount = computed(() => Number(state.value?.headers['x-total-count'] || 0))

  return { execute, data, totalCount, isReady, isLoading, error }
}
