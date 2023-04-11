import React from "react";
import chair from "../../../assets/chair.png"
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import chairBg from '../../../assets/chairBg.png'
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero "
    style = {{ 
        background: `url(${chairBg})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className=" rounded-lg md:w-1/2 shadow-2xl" alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile <br /> Starts Here</h1>
          <p className="py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore voluptatem suscipit optio sit labore.
          </p>
          <PrimaryButton><Link to="/">Get Started</Link></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
