import React from 'react';
import ComboText from '../Combo/ComboText';

function SectionNFT() {
  return (
    <div id='sectionNFT' className='sectionNFT'>
        <video className="video" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
            <source src="/colba.mp4" type="video/mp4" />
        </video>
        <div className='content'>
            <ComboText
                title="Flowerave’s first collection is a thousand ‘Rose’ NFT’s. The NFT is a key to authorise in the bot."
                description="Первая коллекция Flowerave “Rose” содержит тысячу NFT -  это ключ для авторизации в боте и эко-системе приложений Flowerave"
                primaryBtn="Кнопка"
                secondaryBtn="Кнопка"
            />
        </div>
    </div>
  )
}

export default SectionNFT