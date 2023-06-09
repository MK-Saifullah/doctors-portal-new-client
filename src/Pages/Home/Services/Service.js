import React from "react";

const Service = ({ service }) => {
  const { icon, name, detail } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={icon}
          alt="Shoes"
          className="rounded w-20"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{detail}</p>
        
      </div>
    </div>
  );
};

export default Service;
