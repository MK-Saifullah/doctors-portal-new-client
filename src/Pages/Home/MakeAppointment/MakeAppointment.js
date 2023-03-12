import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const MakeAppointment = () => {
  return (
    <section className="mt-32"
    style={{ background: `url(${appointment})`}}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="max-w-sm hidden md:block rounded-lg shadow-2xl -mt-32" alt="" />
          <div className="text-center">
            <h4 className="text-primary font-bold text-2xl">Appointment</h4>
            <h1 className="text-5xl font-bold text-white">
              Make an appointment <br /> today
            </h1>
            <p className="py-6 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              dicta quas totam, dolor sit nulla?
            </p>
            {/* <button className="btn btn-primary"></button> */}
            <PrimaryButton><Link to="/appointment">Appointment</Link></PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
