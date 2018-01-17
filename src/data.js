
export const DEFAULT_QUERY = 'redux'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

export async function fetchData (searchTerm, page = 0) {
  const response = await fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
  return response.json()
}
