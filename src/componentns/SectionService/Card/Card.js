import React from 'react';
import Image from 'next/image';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Card(props) {

    useEffect(() => {
        gsap.to(".v-a", {
            duration: 1,
            y: "-64px",
            scrollTrigger: {
                trigger: ".sectionMain",
                start: "top center",
                end: "bottom ",
                scrub: 1,
        },
        });
        // Next
        gsap.to(".t-a", {
            duration: 1,
            y: "-32px",
            scrollTrigger: {
                trigger: ".sectionMain",
                start: "top center",
                end: "bottom ",
                scrub: 1,
        },
        });
        }, []);

    const myLoader = ({ src, width, quality }) => {
        return `https://flowerave.app/${src}?w=${width}&q=${quality || 75}`
    }

  return (
        <div className="card_Service">
            <video className='v-a video-colba image' loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                <source src="/empty.mp4" />
            </video>
            <h3 className='t-a title'>{ props.title }</h3>
            <p className='body'>{ props.body }</p>
            <p className='t-d description'>{ props.description }</p>
            <p className='caption'>{ props.caption }</p>
        </div>
  )
}

export default Card