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
                title="F22"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod urna rhoncus, ultricies mi sit amet, interdum purus. Cras vel mauris justo. Integer ac consectetur nisl. Fusce lobortis urna tellus, eu vestibulum arcu lobortis ac."
                primaryBtn="Кнопка"
                secondaryBtn="Кнопка"
            />
        </div>
    </div>
  )
}

export default SectionLabel