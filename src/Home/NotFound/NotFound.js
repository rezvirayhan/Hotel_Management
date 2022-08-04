import React from 'react';
import notFound from '../../images/NotFound/not_found.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid img-thumbnail' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;