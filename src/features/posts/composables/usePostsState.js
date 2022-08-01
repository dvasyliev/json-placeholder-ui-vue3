import { watch } from 'vue'
import { useAsyncState } from '@/shared/composables/useAsyncState'
import { useRouterQuery } from '@/shared/composables/useRouterQuery'
import { getPosts } from '../postsService'

const INITIAL_QUERY = {
  limit: 10,
  offset: 0,
  userId: null,
}

export const usePostsState = () => {
  const { query, setQuery } = useRouterQuery(INITIAL_QUERY)
  const { data, totalCount, isReady, isLoading, error, execute } = useAsyncState(getPosts)
  const executeFunction = () => execute(0, query.value)

  watch(query, executeFunction)

  return {
    getPosts: executeFunction,
    posts: data,
    postsTotalCount: totalCount,
    isPostsReady: isReady,
    isPostsLoading: isLoading,
    postsError: error,
    postsQuery: query,
    setPostsQuery: setQuery,
  }
}
