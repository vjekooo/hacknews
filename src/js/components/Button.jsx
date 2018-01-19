
// @flow

import React from 'react'

const Button = (props: {
  className: string,
  onDismiss: void,
  children: string
}) => {
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

export default Button
