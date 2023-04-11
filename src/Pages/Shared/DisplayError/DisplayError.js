import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const navigate = useNavigate();

    const {logOutUser} = useContext(AuthContext)
    const error = useRouteError()
    const handleLogOut = () => {
        logOutUser()
        .then(() => {
            toast("Sign out Successfully")
            navigate('/login')
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h2 className='text-2xl'>
                Please <button onClick={handleLogOut} className="btn btn-error"><Link>Log Out</Link></button> or go back to the home page <Link to="/"><button className='btn btn-primary'>Home</button></Link>
            </h2>
        </div>
    );
};

export default DisplayError;