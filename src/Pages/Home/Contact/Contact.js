import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import chairBg from '../../../assets/images/bg.png'

const Contact = () => {
  return (
    <div className="hero bg-accent mt-12 mb-20"
    style = {{backgroundImage: `url(${chairBg})`}}
    >
          {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
      <div className="hero-content flex-col">
        <div className="text-center">
            <h4 className="text-primary font-bold text-2xl">Contact us</h4>
            <h2 className="text-4xl text-white">Stay connected with us</h2>
        </div>
        <div className="text-center lg:text-left">
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover" >
                  Forgot password?
                </a>
              </label>
              <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            </div>
            <div className="form-control mt-6 text-center">
              <PrimaryButton>Log in</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
