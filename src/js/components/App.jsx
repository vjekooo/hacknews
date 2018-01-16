
import React, { Component } from 'react'
import Search from './Search'
import Table from './Table'

const DEFAULT_QUERY = 'redux'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    }
  }

  setSearchTopStories = (result) => {
    this.setState({
      result
    })
  }

  fetchSearchTopStories = (searchTerm) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e)
  }

  componentDidMount () {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  onDismiss = (id) => {
    function isNotId (item) {
      return item.objectID !== id
    }
    const updatedHits = this.state.list.filter(isNotId)
    this.setState({
      result: Object.assign({}, this.state.result, {
        hits: updatedHits
      })
    })
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render () {
    const { searchTerm, result } = this.state
    if (!result) {
      return null
    }
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onSearchChange={this.onSearchChange}
          >
            Search
          </Search>
        </div>
        <Table
          result={result.hits}
          searchTerm={searchTerm}
          onDismiss={this.onDismiss}
          isSearched={isSearched}
        />
      </div>
    )
  }
}

export default App
