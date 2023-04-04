import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import loginLogo from "../../../assets/images/login.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
// import SocialLogin from "./SocialLogin";

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(imageHostKey)
    const navigate = useNavigate(); 
    
    // const navigate = useNavigate()
    // const {createUser, updateProfileUser} = useContext(AuthContext)
    // const [user, setUser] = useState({})
    // const [error, setError] = useState('')
    
    // const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail)
    
    // if(token) {
        //   navigate('/')
        // }
        
        const {data: specialties, isLoading} = useQuery({
            queryKey:['specialty'],
            queryFn: async () => {
                const res = await fetch(`http://localhost:5000/appointmentSpecialty`)
                const data = await res.json();
                return data;
            }
        })
        
        const handleAddDoctor = (data) => {
            const imageHostKey = process.env.REACT_APP_imgbbKey;
            console.log('image Key',imageHostKey);
            const image = data.image[0];
            // console.log(image)
            const formData = new FormData()
            formData.append('image', image)
            const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(imgData => {
                if(imgData.success) {
                    console.log('imgbb', imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    // Save doctors information to DB
                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if(result.acknowledged) {
                            toast.success(`${data.name} doctor added successfully`)
                            navigate('/dashboard/manage-doctors')
                        }
                    })

                }
            })
    }

    if(isLoading) {
        return <Loading></Loading>
    }

  return (
    <div className="hero w-full">
      <div className="hero-content flex-col lg:flex-row md:flex-row ">
        <div className="text-center lg:text-left md:text-left">
          <img src={loginLogo} alt="" className="w-3/4" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 ">
          <h1 className="text-5xl font-bold text-center">Add a doctor</h1>
          
          
          <form onSubmit={handleSubmit(handleAddDoctor)}>
           
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
              <label className="label"><span className="label-text">Specialty</span></label>
              <select 
              {...register('specialty')}
              className="select select-bordered w-full max-w-xs">
                <option disabled selected>Pick a specialty</option>
                {
                    specialties?.map((specialty) => <option  
                    key = {specialty._id}
                    value = {specialty.name}
                    >{specialty.name}</option>
                    )
                }
                
                
            </select>
            </div>
            
            <div className="form-control max-w-xs ml-8">
              <label className="label"><span className="label-text">Photo</span></label>
                <input {...register("image")} type="file" name="image" className="input input-bordered" defaultValue=""  />
                {errors.name && <span className="text-red-600">{errors.name?.message}</span>}
            </div>
                
            <input className="btn btn-accent w-full max-w-xs ml-8 mt-5" value="Add Doctor" type="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

/** Three places to store images in server-side
 *1. Third Party image hosting service
 2. File system of your own server
 3. MongoDB (Database) 
 */
export default AddDoctor;
