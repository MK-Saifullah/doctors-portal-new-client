import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
            {   id: 1,
                icon : fluoride,
                name: 'Flouride Treatement',
                detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum   '
            },
            {   id: 2,
                icon : cavity,
                name: 'Cavity Filling Treatement',
                detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum   '
            },
            {   id: 3,
                icon : whitening,
                name: 'Teeth Whitening Treatement',
                detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum   '
            },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
            <h3 className=' text-primary uppercase font-bold text-xl'>Our Services</h3>
            <h2 className=' font-bold text-6xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-8'>
            {
                servicesData.map(service => <Service
                    key = { service.id}
                    service = { service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;