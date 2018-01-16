
import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { onDismiss, className = '', children } = props
  return (
    <button
      type="button"
      className={className}
      onClick={onDismiss}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Button
