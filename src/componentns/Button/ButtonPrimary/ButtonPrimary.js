import React from 'react';

function ButtonPrimary(props) {
  return (
    <button className='buttonPrimary btn_Primary'>
        <span className='text'>{props.body}</span>
    </button>
  )
}

export default ButtonPrimary