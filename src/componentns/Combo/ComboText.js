import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';
import ButtonPrimary from '../Button/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary/ButtonSecondary';

function ComboText(props) {
  return (
    <div className='comboText'>
        <h2 className='headerline headerline5'>{props.title}</h2>
        <p className='description'>{props.description}</p>
        <div className='row'>
            <Link href={'props.linkBtnPrimary'}>
              <ButtonPrimary body={props.primaryBtn} />
            </Link>
            <Link href='https://google.com/'>
              <ButtonSecondary body={props.secondaryBtn} />
            </Link>
        </div>
    </div>
  )
}

export default ComboText