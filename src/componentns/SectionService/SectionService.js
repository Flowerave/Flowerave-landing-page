import React from 'react';
import Card from './Card/Card';

function SectionService() {
  return (
    <div id='sectionService' className='sectionService'>
        <Card
            id="1"
            image="cover.jpg"
            title="Cryptocurrency"
            body=""
            description="Flowerave Tickets are secure and close to impossible to forge, as they are encrypted."
            caption=""
            alt="💎"
        />
        <Card
            id="2"
            image="cover1.jpg"
            title="Data Security & Storage"
            body=""
            description="Blockchain allows control and tracking for all tickets, further ensuring no sales above the limit or capacity."
            caption=""
            alt="🔐"
        />
        <Card
            id="3"
            image="cover.jpg"
            title="Convenience & Experience"
            body=""
            description="Flowerave Tickets are much more convenient to travel with, as they are stored online."
            caption=""
            alt="💃🏻"
        />
        <Card
            id="4"
            video="cristal_zerowaste.mp4"
            image="cristal_zerowaste.jpg"
            title="Ecology & Nature Protection"
            body=""
            description="Flowerave Tickets are cost-efficient, as multiple currencies are accepted, providing more convenience for global customers."
            caption=""
            alt="🌳"
        />
        <Card
            id="5"
            image="cover.jpg"
            title="Friends & Communication"
            body=""
            description="Flowerave Tickets are cost-efficient, as multiple currencies are accepted, providing more convenience for global customers."
            caption=""
            alt="🫱🏻‍🫲🏽"
        />
        <Card
            id="6"
            image="cover1.jpg"
            title="Tools for Organizers"
            body=""
            description="Flowerave Tickets are cost-efficient, as multiple currencies are accepted, providing more convenience for global customers."
            caption=""
            alt="🛠"
        />
    </div>
  )
}

export default SectionService