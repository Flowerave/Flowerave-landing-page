import Link from 'next/link';
import React from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function SectionMain() {
        useEffect(() => {
        gsap.to(".video", {
            duration: 1,
            filter: "blur(3em)",
            opacity: 0,
            y: "-60vh",
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".sectionMain",
                start: "top",
                end: "bottom ",
                scrub: 2,
        },
        });

        gsap.to(".headerline-action", {
            duration: 10,
            y: "-3.5em",
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".sectionMain",
                start: "top",
                end: "bottom ",
                scrub: 1,
        },
        });

        gsap.to(".row-action", {
            duration: 10,
            y: "-2.5em",
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".sectionMain",
                start: "top",
                end: "bottom ",
                scrub: 3,
        },
        });
        }, []);

  return (
    <div id='sectionMain' className='sectionMain'>
        {/* Main Video */}
        <video className="video" loop={'true'} muted={'true'} autoPlay={'true'} playsInline={'true'}>
            <source src="/MainVideo.mp4" type="video/mp4" />
        </video>
        {/* Content */}
        <div className='content'>
            <h1 className='headerline-action headerline headerline2'>Раскрой возможности Web&nbsp;3.0 вместе с&nbsp;Flowerave</h1>
            <div className='row-action row'>

            <div className='sectionButton'>
                <button className='buttonPrimary btn_Primary'>
                    <Link className='text' href="https://getgems.io/collection/EQDI0ByItZDTy0mOAknepeENARaemaTxM5Ti7O7TexI98o0J" target="_blank">Купить NFT</Link>
                </button>
                <button className='buttonSecondary btn_Secondary'>
                    <Link className='text' href="https://t.me/Flowerave_Quiz_bot" target="_blank">Го βeta</Link>
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionMain