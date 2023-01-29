import React from 'react';
import Button from '../Button/Button';

function ComboText(props) {
  return (
    <div className='comboText'>
        <h2 className='headerline headerline5'>{props.title}</h2>
        <p className='description'>{props.description}</p>
        <div className='row'>
            <Button body={props.primaryBtn} />
            <Button body={props.secondaryBtn} />
        </div>
    </div>
  )
}

export default ComboText