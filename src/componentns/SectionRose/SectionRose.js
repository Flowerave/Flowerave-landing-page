import React from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function SectionRose() {
    useEffect(() => {
        gsap.to(".h-a-r", {
            duration: 10,
            y: "-6em",
            scrollTrigger: {
                trigger: ".sectionRose",
                start: "top center",
                end: "bottom ",
                scrub: 3,
        },
        });

        gsap.to(".d-a-r", {
            duration: 10,
            y: "-3em",
            scrollTrigger: {
                trigger: ".sectionRose",
                start: "top center",
                end: "bottom ",
                scrub: 6,
        },
        });

        gsap.to(".r-r-1", {
            duration: 10,
            x: "-8em",
            scrollTrigger: {
                trigger: ".sectionRose",
                start: "top center",
                end: "bottom ",
                scrub: 3,
        },
        });
        gsap.to(".r-r-2", {
            duration: 10,
            x: "8em",
            scrollTrigger: {
                trigger: ".sectionRose",
                start: "top center",
                end: "bottom ",
                scrub: 3,
        },
        });
        gsap.to(".r-r-3", {
            duration: 10,
            x: "-8em",
            scrollTrigger: {
                trigger: ".sectionRose",
                start: "top center",
                end: "bottom ",
                scrub: 2,
        },
        });

        // Add
        }, []);

  return (
    <div id='sectionRose' className='sectionRose'>
        <h2 className='h-a-r headerline headerline5'>Flowerave&nbsp;&mdash; цифровая экосистема на&nbsp;блокчейне TON, созданная этузиастами рейв- и&nbsp;интернет-культуры. Нашими базовыми принципами является технологичность, безопасность и&nbsp;анонимность данных, а&nbsp;также творческий подход ко&nbsp;всему, что мы&nbsp;делаем.</h2>
        <p className='d-a-r description'>В&nbsp;основе проекта лежит коллекция NFT-цветков, каждый из&nbsp;которых является ключом от&nbsp;экосистемы со&nbsp;своими уникальными особенностями. Идея навеяна каноническим образом рычага коробки передач винтажного автомобиля&nbsp;&mdash; розой в&nbsp;кристалле. Каждый токен является ключом от&nbsp;различных функций экосистемы и&nbsp;обладает уинкальными свойствами, но&nbsp;обо всём этом мы&nbsp;расскажем позже. Первый минт из&nbsp;99&nbsp;роз уже доступен.</p>

        <div className='roseMetro'>
            {/* Row 1 */}
            <div className='row r-r-1'>
                {/* Rose 1 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose1.mp4" type="video/mp4" />
                </video>
                {/* Rose 2 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose2.mp4" type="video/mp4" />
                </video>
                {/* Rose 3 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose3.mp4" type="video/mp4" />
                </video>
                {/* Rose 4 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose4.mp4" type="video/mp4" />
                </video>
                {/* Rose 5 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose5.mp4" type="video/mp4" />
                </video>
            </div>
            {/* Row 2 */}
            <div className='row r-r-2'>
                {/* Rose 6 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose6.mp4" type="video/mp4" />
                </video>
                {/* Rose 7 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose7.mp4" type="video/mp4" />
                </video>
                {/* Rose 8 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose8.mp4" type="video/mp4" />
                </video>
                {/* Rose 9 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose9.mp4" type="video/mp4" />
                </video>
            </div>
            {/* Row 3 */}
            <div className='row r-r-3'>
                {/* Rose 10 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose8.mp4" type="video/mp4" />
                </video>
                {/* Rose 11 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose5.mp4" type="video/mp4" />
                </video>
                {/* Rose 12 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose2.mp4" type="video/mp4" />
                </video>
                {/* Rose 13 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose6.mp4" type="video/mp4" />
                </video>
                {/* Rose 14 */}
                <video className="rose" loop={'true'} muted={'true'} autoplay={'true'} playsinline={'true'}>
                    <source src="/rose4.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
  )
}

export default SectionRose