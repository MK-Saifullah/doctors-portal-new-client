import React from "react";

const Testimonial = ({ testimonial }) => {
  const { img, city, name } = testimonial;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <p>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorwn printer 
        </p>

        <div className="card-actions mt-2">
          <div className="flex justify-between items-center  mt-4">
            <div className="avatar pr-4">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <p>{name}</p>
              <p>{city}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
