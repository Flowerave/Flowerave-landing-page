import Link from 'next/link';
import React from 'react';

function ButtonSecondary(props) {
  return (
    <button className='buttonSecondary btn_Secondary'>
      <Link className='text' href={props.href}>{props.body}</Link>
    </button>
  )
}

export default ButtonSecondary