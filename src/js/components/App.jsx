
import React, { Component } from 'react'
import Search from './Search'
import Table from './Table'
import { DEFAULT_QUERY, fetchData } from '../../data'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
      error: null
    }
  }

  setSearchTopStories = (result) => {
    const { hits, page } = result
    const oldHits = page !== 0 ? this.state.result.hits : []
    const updatedHits = [
      ...oldHits,
      ...hits
    ]
    this.setState({
      result: {
        hits: updatedHits, page
      }
    })
  }

  fetchSearchTopStories = (searchTerm, page) => {
    fetchData(searchTerm, page)
      .then(result => this.setSearchTopStories(result))
      .catch(e => this.setState({
        error: e
      }))
  }

  onSearchSubmit = (event) => {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
    event.preventDefault()
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
    const { searchTerm, result, error } = this.state
    const page = (result && result.page) || 0

    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onSearchChange={this.onSearchChange}
            onSearchSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        { error &&
          <div className="error-msg">
            <h1>Wooopsi! Something went wrong with the data fetch</h1>
          </div>
        }
        { result
          ? <Table
            result={result.hits}
            onDismiss={this.onDismiss}
          />
          : null
        }
        <div className="interactions">
          <button
            className="button-more"
            onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}
          >
            More
          </button>
        </div>
      </div>
    )
  }
}

export default App
