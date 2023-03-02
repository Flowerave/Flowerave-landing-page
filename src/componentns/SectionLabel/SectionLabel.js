import Link from 'next/link';
import React from 'react';
import ComboText from '../Combo/ComboText';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function SectionLabel() {
  return (
    <div id="sectionLabel" className='sectionLabel'>
        <div class="labelPhoto">
            <div class="labelPhoto1"> </div>
            <div class="labelPhoto2"> </div>
            <div class="labelPhoto3"> </div>
            <div class="labelPhoto4"> </div>
            <div class="labelPhoto5"> </div>
            <div class="labelPhoto6"> </div>
            <div class="labelPhoto7"> </div>
            <div class="labelPhoto8"> </div>
        </div>
        <div className='content'>
            <ComboText
                title="Мероприятия"
                description="NFT-цветок&nbsp;&mdash; это не&nbsp;просто цифровые арт-объекты, которыми приятно владеть, но&nbsp;и&nbsp;своего рода карты доступа в&nbsp;закрытый клуб с&nbsp;особыми преференциями, действующими на&nbsp;мероприятиях партнерской сети."
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