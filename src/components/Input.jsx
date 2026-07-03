import React from 'react'

function Input({type , placeholder , label , classname , ...props}) {
  return (
    <input type={type}
    placeholder={placeholder}
    />
  )
}

export default Input