import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
    const {user, logOutUser} = useContext(AuthContext)
    const handleLogOut = () => {
        logOutUser()
        .then(() => {
            toast("Sign out Successfully");
            navigate('/');
        })
        .catch(error => console.error(error))
    }
  const menuLists = (
    <>
      
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      {/* <li>
        <Link to="/contact">Contact</Link>
      </li> */}
      

     { 
     user?.email ?
     <>
        <li>
            <Link to="/dashboard">Dashboard</Link>
         </li>
        <li onClick={handleLogOut}>
        <Link>Log Out</Link>
     </li>
     </>
     :
     
    <>
        <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Register</Link>
      </li>
     </>
      }
      {/* {
        user?.email && <li><Link> {user?.email}</Link></li>
      } */}
    </>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuLists}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuLists}
        </ul>
      </div>
      <label tabIndex={0} className="btn btn-ghost lg:hidden" htmlFor="my-drawer-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
    </div>
  );
};

export default Navbar;
