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
            title="Data security & storage"
            body=""
            description="Blockchain allows control and tracking for all tickets, further ensuring no sales above the limit or capacity."
            caption=""
            alt="🔐"
        />
        <Card
            id="3"
            image="cover.jpg"
            title="Convenience & experience"
            body=""
            description="Flowerave Tickets are much more convenient to travel with, as they are stored online."
            caption=""
            alt="💃🏻"
        />
        <Card
            id="4"
            image="cover1.jpg"
            title="Ecology & nature protection"
            body=""
            description="Flowerave Tickets are cost-efficient, as multiple currencies are accepted, providing more convenience for global customers."
            caption=""
            alt="🌳"
        />
        <Card
            id="5"
            image="cover.jpg"
            title="Friends & communication"
            body=""
            description="Flowerave Tickets are cost-efficient, as multiple currencies are accepted, providing more convenience for global customers."
            caption=""
            alt="🫱🏻‍🫲🏽"
        />
        <Card
            id="6"
            image="cover1.jpg"
            title="Tools for organizers"
            body=""
            description="Flowerave Tickets are cost-efficient, as multiple currencies are accepted, providing more convenience for global customers."
            caption=""
            alt="🛠"
        />
    </div>
  )
}

export default SectionService