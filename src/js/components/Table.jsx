
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Table = (props) => {
  const { result, onDismiss } = props
  return (
    <div className="table">
      {
        result
          .map((item, index) =>
            <div key={item.objectID} className="table-row">
              <span>
                {index + 1}
              </span>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.points} points</span>
              <span>by {item.author}</span>
              <span>{item.num_comments} comments</span>
              <Button
                className="button-inline"
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
  result: PropTypes.array.isRequired,
  onDismiss: PropTypes.func
}

export default Table
