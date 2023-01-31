import Link from 'next/link';
import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary/ButtonSecondary';

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
            y: "-100vh",
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".sectionMain",
                start: "top center",
                end: "bottom ",
                scrub: 3,
        },
        });

        gsap.to(".headerline-action", {
            duration: 10,
            y: "-3.5em",
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".sectionMain",
                start: "top center",
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
                start: "top center",
                end: "bottom ",
                scrub: 3,
        },
        });
        


        }, []);

  return (
    <div id='sectionMain' className='sectionMain'>
        {/* Main Video */}
        <video className="video" loop={'true'} muted={'true'} autoPlay={'true'} playsInline={'true'}>
            <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Content */}
        <div className='content'>
            <h1 className='headerline-action headerline headerline2'>Unlock Your Possibilities with Flowerave: TON Blockchain Technology and NFTs!</h1>
            <div className='row-action row'>
                <Link href="https://getgems.io" target="_blank">
                    <ButtonPrimary body="Buy NFT" />
                </Link>
                <Link href={'https://t.me/demo_flowerave_bot'} target="_blank">
                    <ButtonSecondary body="Go βeta" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SectionMain