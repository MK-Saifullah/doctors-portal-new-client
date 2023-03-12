import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ServiceDetail = () => {
  return (

    <div className="hero mt-12">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="w-64 rounded-lg shadow-2xl"
          alt=""
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold">Exceptional Dental <br/> Care, on Your Terms</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn btn-primary">Read More</button> */}
          <PrimaryButton>Explore more</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
