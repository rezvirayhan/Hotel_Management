import React from 'react';

const Food = ({food}) => {
    const {img}= food;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
             <img className='img-thumbnail img-fluid' src={img} alt="" />
        </div>
    );
};

export default Food;