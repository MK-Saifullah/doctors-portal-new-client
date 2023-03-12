import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card;
    return (
    <div className={`lg:pt-0 md:pt-0 pt-5 px-6 text-white card lg:card-side md:card-side bg-base-100 shadow-xl ${bgClass}`}>
        <figure><img src={icon} alt="Movie"/></figure>
        
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
        </div>
</div>
    );
};

export default InfoCard;