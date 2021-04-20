import React from 'react'

const Message = ({ message, variant }) => {
  return (
    <div className={variant}>
      <p className="variant-p">{message}</p>
    </div>
  )
}

export default Message
