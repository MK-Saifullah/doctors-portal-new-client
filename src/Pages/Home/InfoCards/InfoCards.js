import React from "react";
import phone from '../../../assets/icons/phone.svg';
import marker from '../../../assets/icons/marker.svg';
import clock from '../../../assets/icons/clock.svg';
import InfoCard from "./InfoCard";

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening hours',
            description: ' Ope 9:00 am till 6:00 pm every day',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
        },
        {
            id: 2,
            name: 'Our Location',
            description: ' Birmingham, West Midlands',
            icon: marker,
            bgClass: 'bg-neutral',
        },
        {
            id: 3,
            name: 'Contact Us',
            description: ' Ope 9:00 am till 6:00 pm every day',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
        },
    ]
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
    {
        cardData.map(card => <InfoCard
            key ={card.id}
            card = {card}
        ></InfoCard>)
    }
   </div>
  );
};

export default InfoCards;
