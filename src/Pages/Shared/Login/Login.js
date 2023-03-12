import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLogo from "../../../assets/images/login.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const {logInUser, user, setUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    // const [data, setData] = useState('');
    const handleLogin = (data) => {
    console.log(data);
    setError('')
    logInUser(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user)
      setUser(user);
      navigate(from, {replace: true})
      toast.success("User logged in successfully")
       
    })
    .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage, error)
    })

  };
  return (
    <div className="hero w-full">
      <div className="hero-content flex-col lg:flex-row md:flex-row ">
        <div className="text-center lg:text-left md:text-left">
          <img src={loginLogo} alt="" className="w-3/4" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 ">
          <h1 className="text-5xl font-bold text-center">Log In</h1>
          
          
          <form onSubmit={handleSubmit(handleLogin)}>
           
            <div className="form-control max-w-xs ml-8">
              <label className="label"><span className="label-text">Email</span></label>
                <input {...register("email", { required: "Email address is required" })} 
                type="email" name="email" className="input input-bordered" defaultValue=""  
                aria-invalid={errors.email ? "true" : "false"} 
                />
                {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs ml-8">
              <label className="label"><span className="label-text">Password</span></label>
              <input {...register("password", {
                    required: "Password is required", 
                    minLength:{value: 6, message:"Must be 6 characters or longer"}, 
                    pattern: {value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, message: "Must be one Special character, one digit and one Capital letter,"},
                })} 
                    type="password" name="password" className="input input-bordered" defaultValue=""  
                />
                {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
              
                <div className="text-red-600">{error && <p>{error}</p>}</div>
              <label className="label"><span className="label-text mt-2">Forget Password?</span></label>
            </div>
            
          
            {errors.exampleRequired && <span>This field is required</span>}
                
            <input className="btn btn-accent w-full max-w-xs ml-8" value="Login" type="Submit" />
          </form>

          <p className="text-center mt-5">
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-orange-600 font-bold">
              Create an account?
            </Link>
          </p>
          {/* <p className='text-center text-red-600 mt-5'>{error.message}</p> */}
          <div className="divider">OR</div>
          {/* <p className="text-center w-full">Sing in with </p> */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
