import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useRouterQuery = (initialQuery) => {
  const router = useRouter()
  const route = useRoute()
  const query = computed(() => ({ ...initialQuery, ...route.query }))

  function setQuery(newQuery) {
    router.push({ query: newQuery })
  }

  return { query, setQuery }
}
