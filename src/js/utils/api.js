
module.exports = {
  DEFAULT_QUERY: 'react',
  PATH_BASE: 'https://hn.algolia.com/api/v1',
  PATH_SEARCH: '/search',
  PARAM_SEARCH: 'query=',
  PARAM_PAGE: 'page=',
  fetchData: async function (searchTerm, page = 0) {
    const response = await fetch(
      `${this.PATH_BASE}${this.PATH_SEARCH}?${this.PARAM_SEARCH}${searchTerm}&${this.PARAM_PAGE}${page}`
    )
    return response.json()
  }
}
