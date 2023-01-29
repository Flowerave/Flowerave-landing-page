import React from 'react';
import Button from '../Button/Button';

function SectionMain() {
  return (
    <div id='sectionMain' className='sectionMain'>
        <video className="video" autoplay muted playsinline>
            <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className='content'>
            <h1 className='headerline headerline1'>Unlock Your Possibilities with Flowerave: TON Blockchain Technology and NFTs!</h1>
            <div className='row'>
                <Button body="Marketplace" />
                <Button body="Go Beta" />
            </div>
        </div>
    </div>
  )
}

export default SectionMain