import React from 'react';
import ComboText from '../Combo/ComboText';
import Link from 'next/link';

function SectionArtist() {

  return (
    <div id="sectionArtist" className='sectionArtist'>
        <video className='videoCover' loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
            <source src="/video_card.mp4" />
        </video>
        <div className='content'>
            <ComboText
                title="Артисты"
                description="Резиденты System 108 регулярно принимают участие в наиболее интересных музыкальных ивентах по всему миру, а в их число входят Errortica, Kito Jempere, Kovyazin D, Lipelis, Maksimovna, Mashkov, Philipp Gorbachev, Simple Symmetry, Sputnik и The Dawless."
            />
            <div className='sectionButton'>
              <button className='buttonPrimary btn_Primary'>
                  <Link className='text' href="https://music.yandex.com/users/radugadiscoclub/playlists/1000?utm_medium=copy_link" target="_blank">Послушать артистов</Link>
              </button>
              <button className='buttonSecondary btn_Secondary'>
                  <Link className='text' href="https://t.me/radugasuperclub" target="_blank">Подробнее</Link>
              </button>
            </div>
        </div>
    </div>
  )
}

export default SectionArtist