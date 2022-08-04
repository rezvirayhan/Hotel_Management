import React from 'react';
import {Link, useParams} from 'react-router-dom';

const TMentorDetails = () => {
    const {tmentordetails} = useParams();
    return (
        <div>
            <h1 className='mt-5 p-5'>Welcome To TMentor Detalis Pages {tmentordetails}</h1>
           <div className='text-center'>
            <Link to="/chackout">
                <button className='btn btn-primary'>Chackoud</button>
            </Link>
           </div>
        </div>
    );
};

export default TMentorDetails;