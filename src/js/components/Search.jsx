
// @flow

import React from 'react'

const Search = (props: {
  searchTerm: string,
  onSearchChange: void,
  onSearchSubmit: void,
  children: string
}) => {
  const { searchTerm, onSearchChange, onSearchSubmit, children } = props
  console.log(searchTerm)
  return (
    <form
      onSubmit={onSearchSubmit}
    >
      <label
        htmlFor={searchTerm}
      >
        {children}
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button type="submit">
        {children}
      </button>
    </form>
  )
}

export default Search
