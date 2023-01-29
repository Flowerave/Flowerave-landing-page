import React from 'react'

function Button(props) {
  return (
    <button className='button btn_Primary'>
        <span className='text'>{props.body}</span>
    </button>
  )
}

export default Button