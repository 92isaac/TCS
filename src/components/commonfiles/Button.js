import React from 'react'

const Button = (props) => {
  return (
    <button className={props.btnClass}>{props.BtnName}</button>
  )
}

export default Button