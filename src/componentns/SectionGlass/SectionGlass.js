import React from 'react';
import Image from 'next/image';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function SectionGlass() {

    const myLoader = ({ src, width, quality }) => {
        return `http://flowerave.me/assets/${src}?w=${width}&q=${quality || 100}`
    }

    useEffect(() => {
        gsap.to(".sectionGlass_glass1", {
            duration: 1,
            y: "-8em",
            transformOrigin: "center",
            scale:"1.4",
            rotate: "-30deg",
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".sectionGlass",
                start: "top center",
                end: "bottom ",
                scrub: 1,
        },
        });

        gsap.to(".sectionGlass_glass2", {
            duration: 1,
            y: "4em",
            transformOrigin: "center",
            scale:"1.2",
            rotate: "10deg",
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".sectionGlass",
                start: "top center",
                end: "bottom ",
                scrub: 3,
        },
        });

        gsap.to(".sectionGlass_glass3", {
            duration: 1,
            y: "-5em",
            transformOrigin: "center",
            scale:"1.4",
            rotate: "90deg",
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".sectionGlass",
                start: "top center",
                end: "bottom ",
                scrub: 3,
        },
        });

    }, []);

  return (
    <div className='sectionGlass'>
        <Image
            className='sectionGlass_glass1'
            loader={myLoader}
            src="glass1.png"
            width={500}
            height={500}
        />

        <Image
            className='sectionGlass_glass2'
            loader={myLoader}
            src="glass2.png"
            width={500}
            height={500}
        />

        <Image
            className='sectionGlass_glass3'
            loader={myLoader}
            src="glass3.png"
            width={500}
            height={500}
        />
    </div>
  )
}

export default SectionGlass