
// @flow

const DEFAULT_QUERY: string = 'front_page'
const PATH_BASE: string = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH: string = '/search'
const PARAM_SEARCH: string = 'query='
const PARAM_TAG: string = 'tags='
const PARAM_PAGE: string = 'page='

module.exports = {
  DEFAULT_QUERY,
  fetchSearch: async function (searchTerm: string, page: number = 0) {
    const response = await fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`
    )
    return response.json()
  },
  fetchFront: async function (searchTerm: string, page: number = 0) {
    const response = await fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_TAG}${searchTerm}&${PARAM_PAGE}${page}`
    )
    return response.json()
  }
}
