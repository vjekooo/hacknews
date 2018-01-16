
import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
  const { searchTerm, onSearchChange } = props
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </form>
  )
}

Search.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func
}

export default Search
