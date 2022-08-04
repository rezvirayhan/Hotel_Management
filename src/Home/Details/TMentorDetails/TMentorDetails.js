import React from 'react';
import {useParams} from 'react-router-dom';

const TMentorDetails = () => {
    const {tmentordetails} = useParams();
    return (
        <div>
            <h1 className='mt-5 p-5'>Welcome To TMentor Detalis Pages {tmentordetails}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias animi quia incidunt, corrupti, fuga, blanditiis atque harum eos quod quam rem expedita ullam eligendi amet soluta voluptates suscipit! Illo neque minus ab ea libero dicta quam, iure natus eos explicabo consequuntur reiciendis, saepe similique soluta ex omnis nihil odio quidem deserunt aut aperiam culpa cum laboriosam? In ratione ea hic delectus et quaerat cupiditate quod eius deserunt praesentium ab, placeat corporis nobis illo nulla similique quibusdam magni quisquam. Modi, error?</p>
        </div>
    );
};

export default TMentorDetails;