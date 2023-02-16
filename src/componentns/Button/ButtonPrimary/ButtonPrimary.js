import Link from 'next/link';
import React from 'react';

function ButtonPrimary(props) {
  return (
    <button className='buttonPrimary btn_Primary'>
        <Link href="{props.href}">{props.body}</Link>
    </button>
  )
}

export default ButtonPrimary