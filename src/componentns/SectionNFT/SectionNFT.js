import Link from 'next/link';
import React from 'react';
import ComboText from '../Combo/ComboText';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function SectionNFT() {

  useEffect(() => {
    gsap.to(".video-colba-gsap", {
        duration: 1,
        y: "-4em",
        transformOrigin: "center",
        scale:"1.2",
        scrollTrigger: {
            trigger: ".sectionNFT",
            start: "top center",
            end: "bottom ",
            scrub: 6,
    },
    });

  }, []);

  return (
    <div id='sectionNFT' className='sectionNFT'>
        {/* Main Video */}
        <video className="video-colba-gsap video-colba" loop={'true'} muted={'true'} autoPlay={'true'} playsInline={'true'}>
            <source src="/colba.mp4" type="video/mp4" />
        </video>
        <div className='content'>
            <ComboText
                title="Ключ к&nbsp;экосистеме Flowerave"
                description="Будьте с&nbsp;нами, и&nbsp;скоро мы&nbsp;начнём открывать для вас все новые и&nbsp;новые двери в&nbsp;мир музыки, искусства и&nbsp;технологий."
                primaryBtn="Маркетплейс"
            />

            <div className='sectionButton'>
                <button className='buttonPrimary btn_Primary'>
                    <Link className='text' href="https://getgems.io/collection/EQDI0ByItZDTy0mOAknepeENARaemaTxM5Ti7O7TexI98o0J" target="_blank">Маркетплейс</Link>
                </button>
                <button className='buttonSecondary btn_Secondary'>
                    <Link className='text' href="https://t.me/flowerave" target="_blank">Канал проекта</Link>
                </button>
            </div>
        </div>

    </div>
  )
}

export default SectionNFT