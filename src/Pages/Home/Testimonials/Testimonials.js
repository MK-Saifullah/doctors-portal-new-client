import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";
import quote from '../../../assets/icons/quote.svg'

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      img: people1,
      name: "Winson Herry",
      city: "California",
    },
    {
      id: 2,
      img: people2,
      name: "Jessica Herry",
      city: "California",
    },
    {
      id: 3,
      img: people3,
      name: "Emma Herry",
      city: "California",
    },
  ];
  return (
    <section className="mt-16">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primary text-2xl font-bold">Testimonial</h3>
          <h2 className="text-4xl">What Our Patients Say</h2>
        </div>
        <figure>
            <img className="w-24 lg:w-48" src={quote} alt=""/>
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {testimonialsData.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
