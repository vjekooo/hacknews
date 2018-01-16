
import React from 'react'
import PropTypes from 'prop-types'

const Table = (props) => {
  const { searchTerm, list, onDismiss, isSearched } = props
  return (
    <div>
      {
        list
          .filter(isSearched(searchTerm))
          .map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <button
                type="button"
                onClick={() => onDismiss(item.objectID)}
              >
                Dismiss
              </button>
            </div>
          )
      }
    </div>
  )
}

Table.propTypes = {
  searchTerm: PropTypes.string,
  list: PropTypes.object,
  onDismiss: PropTypes.func,
  isSearched: PropTypes.func
}

export default Table
