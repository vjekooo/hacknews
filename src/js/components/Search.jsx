
import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
  const { searchTerm, onSearchChange, onSearchSubmit, children } = props
  return (
    <form
      onSubmit={onSearchSubmit}
    >
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

Search.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Search
