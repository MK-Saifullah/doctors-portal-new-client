import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const SocialLogin = () => {
    const googleProvider = new GoogleAuthProvider();
  const { googleUser, setUser } = useContext(AuthContext);
  
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleUser(googleProvider)
    .then(result => {
        const user = result.user;
        console.log(user)
        setUser(user)
        navigate(from, {replace: true})
    })
    .catch(err => console.error(err))
  };
  return (
    <div>
      <h2 className="text-center">
        {/* <button onClick={handleGoogle} >
          <p  className="btn btn-outline w-full max-w-xs ml-8"><FaGoogle></FaGoogle></p>
        </button> */}
        <button onClick={handleGoogle} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent text-white'> Login with Google <FaGoogle></FaGoogle></button>
      </h2>
    </div>
  );
};

export default SocialLogin;
