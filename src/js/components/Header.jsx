
// @flow

import React from 'react'
import Search from './Search'

const Header = (props) => {
  const { value, onSearchChange, onSearchSubmit } = props
  return (
    <header className="page-header">
      <div className="page-title">
        <h2>Hacker News</h2>
      </div>
      <div className="page-search">
        <Search
          value={value}
          onSearchChange={onSearchChange}
          onSearchSubmit={onSearchSubmit}
        >
          Search
        </Search>
      </div>
      <div>
        <h4>login</h4>
      </div>
    </header>
  )
}

export default Header
