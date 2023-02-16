import Link from 'next/link'
import React from 'react'
import ComboText from '../Combo/ComboText'

function SectionLabel() {
  return (
    <div id="sectionLabel" className='sectionLabel'>
        <video className='videoCover' loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
            <source src="/video.mp4" />
        </video>
        <div className='content'>
            <ComboText
                title="Мероприятия"
                description="Российский музыкальный лейбл, букинг- и ивент-агентство основанное в 2015 Евгением Машковым. Его основной идеей является свобода самовыражения и тесное переплетение различных направлений современного искусства, включая моду, живопись, видео-арт и, конечно, электронную музыку."
            />
        </div>

        <div className='sectionButton'>
              <button className='buttonPrimary btn_Primary'>
                  <Link className='text' href="https://system108.com/2023-03-04" target="_blank">Афиша</Link>
              </button>
              <button className='buttonSecondary btn_Secondary'>
                  <Link className='text' href="https://t.me/system108" target="_blank">Подробнее</Link>
              </button>
        </div>
    </div>
  )
}

export default SectionLabel