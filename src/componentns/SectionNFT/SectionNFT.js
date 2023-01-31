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
                title="Первая коллекция Flowerave &laquo;Rose&raquo; содержит тысячу NFT - это ключ для авторизации в боте и эко-системе приложений Flowerave"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod urna rhoncus, ultricies mi sit amet, interdum purus. Cras vel mauris justo. Integer ac consectetur nisl. Fusce lobortis urna tellus, eu vestibulum arcu lobortis ac."
                primaryBtn="Кнопка"
                secondaryBtn="Кнопка"
            />
        </div>
    </div>
  )
}

export default SectionNFT