import React from 'react';
import ComboText from '../Combo/ComboText';

function SectionNFT() {
  return (
    <div id='sectionNFT' className='sectionNFT'>
        {/* Main Video */}
        <video className="video-colba" loop={'true'} muted={'true'} autoPlay={'true'} playsInline={'true'}>
            <source src="/colba.mp4" type="video/mp4" />
        </video>
        <div className='content'>
            <ComboText
                title="NFT - это ключ для авторизации в эко-системе приложений Flowerave"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod urna rhoncus, ultricies mi sit amet, interdum purus. Cras vel mauris justo. Integer ac consectetur nisl. Fusce lobortis urna tellus, eu vestibulum arcu lobortis ac."
                primaryBtn="Маркетплейс"
                linkBtnPrimary="https://ya.ru"
                secondaryBtn="Сообщество"
            />
        </div>
    </div>
  )
}

export default SectionNFT