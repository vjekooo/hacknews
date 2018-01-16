
import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
  const { searchTerm, onSearchChange, children } = props
  return (
    <form>
      {children} <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </form>
  )
}

Search.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Search
