
// @flow

import React, { Component, Fragment } from 'react'
import Table from './Table'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import api from '../utils/api'

type Props = {

}

type State = {
  result: any,
  searchTerm: string,
  error: ?string,
  isLoading: bool
}

class App extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      result: null,
      searchTerm: api.DEFAULT_QUERY,
      error: null,
      isLoading: false
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
      },
      isLoading: false
    })
  }

  fetchSearchTopStories = (searchTerm: string, page: number) => {
    this.setState({
      isLoading: true
    })

    api.fetchSearch(searchTerm, page)
      .then(result => this.setSearchTopStories(result))
      .catch(e => this.setState({
        error: e
      }))
  }

  fetchHackerStories = (searchTerm: string, page: number) => {
    this.setState({
      isLoading: true
    })

    api.fetchFront(searchTerm, page)
      .then(result => this.setSearchTopStories(result))
      .catch(e => this.setState({
        error: e
      }))
  }

  nextPage = (searchTerm: string, page: number) => {
    searchTerm === 'front_page'
      ? this.fetchHackerStories(searchTerm, page)
      : this.fetchSearchTopStories(searchTerm, page)
  }

  onSearchSubmit = (event: SyntheticEvent<>) => {
    const { searchTerm } = this.state
    event.preventDefault()
    this.fetchSearchTopStories(searchTerm)
    this.setState({
      searchTerm: ''
    })
  }

  componentDidMount () {
    const { searchTerm } = this.state
    this.fetchHackerStories(searchTerm)
  }

  onDismiss = (id: number) => {
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

  onSearchChange = (event: SyntheticInputEvent<>) => {
    this.setState({
      searchTerm: event.target.value
    })
  }
  render () {
    const { searchTerm, result, error, isLoading } = this.state
    const page = (result && result.page) || 0
    return (
      <Fragment>
        <Header
          value={searchTerm}
          onSearchChange={this.onSearchChange}
          onSearchSubmit={this.onSearchSubmit}
        >
        </Header>
        <Nav />
        <div className="page">
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
            { isLoading
              ? <h1>Loading</h1>
              : <button
                className="button-more"
                onClick={() => this.nextPage(searchTerm, page + 1)}
              >
                More
              </button>
            }
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default App
