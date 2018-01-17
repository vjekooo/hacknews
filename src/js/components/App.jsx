
import React, { Component } from 'react'
import Search from './Search'
import Table from './Table'
import { DEFAULT_QUERY, fetchData } from '../../data'

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
    fetchData(searchTerm)
      .then(result => this.setSearchTopStories(result))
      .catch(e => e)
  }

  componentDidMount () {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  onDismiss = (id) => {
    const { hits } = this.state.result
    function isNotId (item) {
      return item.objectID !== id
    }
    const updatedHits = hits.filter(isNotId)
    // this.setState({
    //   result: Object.assign({}, this.state.result, {
    //     hits: updatedHits
    //   })
    // })
    this.setState({
      result: {
        ...this.state.result,
        hits: updatedHits
      }
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
        { result
          ? <Table
            result={result.hits}
            searchTerm={searchTerm}
            onDismiss={this.onDismiss}
            isSearched={isSearched}
          />
          : null
        }
      </div>
    )
  }
}

export default App
