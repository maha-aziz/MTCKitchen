import React from 'react'
import './button.css'

const Button = ({title}) => {
  return (
    <div className="button btn-custom">
      <button className="primary-btn">{title}</button>
    </div>
  )
}

export default Button
