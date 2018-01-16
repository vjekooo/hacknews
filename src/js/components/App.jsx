
import React, { Component } from 'react'
import Search from './Search'
import Table from './Table'

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list,
      searchTerm: ''
    }
  }

  onDismiss = (id) => {
    function isNotId (item) {
      return item.objectID !== id
    }
    const updatedList = this.state.list.filter(isNotId)
    this.setState({
      list: updatedList
    })
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render () {
    const { searchTerm, list } = this.state
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onSearchChange={this.onSearchChange}
        >
          Search
        </Search>
        <Table
          list={list}
          searchTerm={searchTerm}
          onDismiss={this.onDismiss}
          isSearched={isSearched}
        />
      </div>
    )
  }
}

export default App
