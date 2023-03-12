import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import loginLogo from "../../../assets/images/login.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
    const navigate = useNavigate()
    const {createUser, updateProfileUser} = useContext(AuthContext)
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
  const handleSignIn = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(userCredential => {
        const user = userCredential.user;
        console.log(user)
        const profile = {
            displayName: data.name
        }
        updateProfileUser(profile)
        .then(() => {
            navigate('/')
        })
        .catch(err => console.error(err))

        setUser(user)
        toast("New user created successfully")
    })
    .catch(err => {
        console.error(err)
        setError(err.message)
    });
  };
  return (
    <div className="hero w-full">
      <div className="hero-content flex-col lg:flex-row md:flex-row ">
        <div className="text-center lg:text-left md:text-left">
          <img src={loginLogo} alt="" className="w-3/4" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 ">
          <h1 className="text-5xl font-bold text-center">Register</h1>
          
          
          <form onSubmit={handleSubmit(handleSignIn)}>
           
            <div className="form-control max-w-xs ml-8">
              <label className="label"><span className="label-text">Name</span></label>
                <input {...register("name", {required: "Name is required to register yourself"})} type="text" name="name" className="input input-bordered" defaultValue=""  />
                {errors.name && <span className="text-red-600">{errors.name?.message}</span>}
            </div>
            <div className="form-control max-w-xs ml-8">
              <label className="label"><span className="label-text">Email</span></label>
                <input {...register("email", {
                    required: "Email address is required"})} type="email" name="email" className="input input-bordered" defaultValue=""  
                />
                {errors.email && <p role="alert" className="text-red-600">{errors.email?.message}</p>}
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
                {errors.password && <p role="alert" className="text-red-600">{errors.password?.message}</p>}
              <span className="text-red-600">{error}</span>
            </div>
            
          
            {errors.exampleRequired && <span>This field is required</span>}
                
            <input className="btn btn-accent w-full max-w-xs ml-8 mt-5" value="Sign Up" type="Submit" />
          </form>


          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 font-bold">
              Login
            </Link>
          </p>
          {/* <p className='text-center text-red-600 mt-5'>{error.message}</p> */}
          <div className="divider">OR</div>
          {/* <button className="btn btn-outline w-full max-w-xs ml-8">Sing in with google  </button> */}
          <SocialLogin></SocialLogin> 
        </div>
      </div>
    </div>
  );
};

export default SignUp;
