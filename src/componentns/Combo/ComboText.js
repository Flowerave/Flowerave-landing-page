import React from 'react';
import Button from '../Button/Button';
import ButtonSecondary from '../Button/ButtonSecondary/ButtonSecondary';

function ComboText(props) {
  return (
    <div className='comboText'>
        <h2 className='headerline headerline5'>{props.title}</h2>
        <p className='description'>{props.description}</p>
        <div className='row'>
            <Button body={props.primaryBtn} />
            <ButtonSecondary body={props.secondaryBtn} />
        </div>
    </div>
  )
}

export default ComboText