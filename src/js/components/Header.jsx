
// @flow

import React from 'react'
import Search from './Search'

const Header = (props) => {
  const { value, onSearchChange, onSearchSubmit } = props
  return (
    <header className="hacker-header">
      <div className="hacker-title">
        <h1>Hacker News</h1>
      </div>
      <div className="hacker-search">
        <Search
          value={value}
          onSearchChange={onSearchChange}
          onSearchSubmit={onSearchSubmit}
        >
          Search
        </Search>
      </div>
    </header>
  )
}

export default Header
