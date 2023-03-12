import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({children}) => {
    return (
        <Link to=""><button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
        >{children}</button></Link>
    );
};

export default PrimaryButton;