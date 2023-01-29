import React from 'react';
import Button from '../Button/Button';

function SectionArtist() {
  return (
    <div id="sectionArtist" className='sectionArtist'>
        <video className='video' autoPlay loop >
            <source src="/video1.mp4" />
        </video>
        <div className='content'>
            <h2 className='headerline headerline5'>Flowerave project is aiming to be the future of the entertainment industry, as it offers cryptocurrency payment methods and supplies customers with an unforgettable event experience providing tech-exclusive merch.</h2>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod urna rhoncus, ultricies mi sit amet, interdum purus. Cras vel mauris justo. Integer ac consectetur nisl. Fusce lobortis urna tellus, eu vestibulum arcu lobortis ac. </p>
            <div className='row'>
                <Button body="Marketplace" />
                <Button body="Go Beta" />
            </div>
        </div>
    </div>
  )
}

export default SectionArtist