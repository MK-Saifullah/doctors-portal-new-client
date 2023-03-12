import React from "react";
import { Link } from "react-router-dom";
import footer from '../../../assets/images/footer.png'

const Footer = () => {
  return (
    
    <footer 
        style ={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}
    className=" p-10 mt-16">
      <div className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        <div>
            <span className="footer-title">Services</span>
            <Link to="/" className="link link-hover">Branding</Link>
            <Link to="/" className="link link-hover">Design</Link>
            <Link to="/" className="link link-hover">Marketing</Link>
            <Link to="/" className="link link-hover">Advertisement</Link>
        </div>
        <div>
            <span className="footer-title">Company</span>
            <Link to="/" className="link link-hover">About us</Link>
            <Link to="/" className="link link-hover">Contact</Link>
            <Link to="/" className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
            <span className="footer-title">Legal</span>
            <Link to="/" className="link link-hover">Terms of use</Link>
            <Link to="/" className="link link-hover">Privacy policy</Link>
            <Link to="/" className="link link-hover">Cookie policy</Link>
        </div>
      </div>

      <div className="text-center mt-16">
        <p>Copyright © 2023 - All right reserved by MK Saifullah</p>
      </div>
    </footer>
  );
};

export default Footer;
