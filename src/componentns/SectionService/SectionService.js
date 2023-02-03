import React from 'react';
import Card from './Card/Card';

function SectionService() {
  return (
    <div id='sectionService' className='sectionService'>
        <Card
            id="1"
            video="empty.mp4"
            image="cover.jpg"
            title="Блокчейн TON"
            body=""
            description="Flowerave Tickets are secure and close to impossible to forge, as they are encrypted."
            caption=""
            alt="💎"
        />
        <Card
            id="2"
            video="empty.mp4"
            image="cover1.jpg"
            title="Мероприятия"
            body=""
            description="Blockchain allows control and tracking for all tickets, further ensuring no sales above the limit or capacity."
            caption=""
            alt="🔐"
        />
        <Card
            id="3"
            video="empty.mp4"
            image="cover.jpg"
            title="Опыт использования"
            body=""
            description="Flowerave Tickets are much more convenient to travel with, as they are stored online."
            caption=""
            alt="💃🏻"
        />
        <Card
            id="4"
            video="cristal_zerowaste.mp4"
            title="Охрана природы"
            body=""
            description="Flowerave Tickets are cost-efficient, as multiple currencies are accepted, providing more convenience for global customers."
            caption=""
            alt="🌳"
        />
        <Card
            id="5"
            video="empty.mp4"
            image="cover.jpg"
            title="Комьюнити"
            body=""
            description="Flowerave Tickets are cost-efficient, as multiple currencies are accepted, providing more convenience for global customers."
            caption=""
            alt="🫱🏻‍🫲🏽"
        />
        <Card
            id="6"
            video="empty.mp4"
            image="cover1.jpg"
            title="Разработка инструментов"
            body=""
            description="Flowerave Tickets are cost-efficient, as multiple currencies are accepted, providing more convenience for global customers."
            caption=""
            alt="🛠"
        />
    </div>
  )
}

export default SectionService