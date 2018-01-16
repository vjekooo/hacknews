
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

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
              <Button
                onDismiss={() => { onDismiss(item.objectID) }}
              >
                Dismiss
              </Button>
            </div>
          )
      }
    </div>
  )
}

Table.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
  onDismiss: PropTypes.func.isRequired,
  isSearched: PropTypes.func.isRequired
}

export default Table