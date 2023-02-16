import React from 'react';

function ComboText(props) {
  return (
    <div className='comboText'>
        <h2 className='comboTextHeaderline headerline headerline5'>{props.title}</h2>
        <p className='comboTextDescription description'>{props.description}</p>
    </div>
  )
}

export default ComboText