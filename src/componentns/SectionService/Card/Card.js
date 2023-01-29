import React from 'react';
import Image from 'next/image';

function Card(props) {

    const myLoader = ({ src, width, quality }) => {
        return `https://flowerave.app/${src}?w=${width}&q=${quality || 75}`
    }

  return (
        <div className="card_Service">
            <video className='video image' loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                <source src="/empty.mp4" />
            </video>
            <h3 className='title'>{ props.title }</h3>
            <p className='body'>{ props.body }</p>
            <p className='description'>{ props.description }</p>
            <p className='caption'>{ props.caption }</p>
        </div>
  )
}

export default Card