import React from 'react';

function ButtonSecondary(props) {
  return (
    <button className='buttonSecondary btn_Secondary'>
        <span className='text'>{props.body}</span>
    </button>
  )
}

export default ButtonSecondary