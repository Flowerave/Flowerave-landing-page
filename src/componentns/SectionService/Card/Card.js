import React from 'react';
import Image from 'next/image';

function Card(props) {

    const myLoader = ({ src, width, quality }) => {
        return `https://flowerave.app/${src}?w=${width}&q=${quality || 75}`
    }

  return (
        <div className="card_Service">
            <Image
                className='image'
                loader={myLoader}
                src={props.image}
                alt={props.alt}
                width={500}
                height={500}
            />
            <h3 className='title'>{ props.title }</h3>
            <p className='body'>{ props.body }</p>
            <p className='description'>{ props.description }</p>
            <p className='caption'>{ props.caption }</p>
        </div>
  )
}

export default Card