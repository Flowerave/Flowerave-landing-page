import React from 'react';

function Card(props) {

  return (
        <div className="card_Service">
            <video className='v-a video-colba image' loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                <source src={ props.video } />
            </video>
            <h3 className='t-a title'>{ props.title }</h3>
            <p className='body'>{ props.body }</p>
            <p className='d-a description'>{ props.description }</p>
            <p className='caption'>{ props.caption }</p>
        </div>
  )
}

export default Card