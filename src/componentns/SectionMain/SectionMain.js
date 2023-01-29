import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary/ButtonSecondary';

function SectionMain() {
  return (
    <div id='sectionMain' className='sectionMain'>
        {/* Main Video */}
        <video className="video" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
            <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Content */}
        <div className='content'>
            <h1 className='headerline headerline2'>Unlock Your Possibilities with Flowerave: TON Blockchain Technology and NFTs!</h1>
            <div className='row'>
                <ButtonPrimary body="Marketplace" />
                <ButtonSecondary body="Go Beta" />

            </div>
        </div>
    </div>
  )
}

export default SectionMain