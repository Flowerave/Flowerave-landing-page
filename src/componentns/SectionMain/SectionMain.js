import React from 'react';
import Button from '../Button/Button';

function SectionMain() {
  return (
    <div className='sectionMain'>
        <video className='video' autoPlay loop >
            <source src="/video.mp4" />
        </video>
        <div className='content'>
            <h1 className='headerline headerline1'>Unlock Your Possibilities with Flowerave: TON Blockchain Technology and NFTs!</h1>
            <div className='row'>
                <Button body="Marketplace" />
                <Button body="Apply for Beta Testing" />
            </div>
        </div>
    </div>
  )
}

export default SectionMain