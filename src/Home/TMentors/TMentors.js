import React, { useEffect, useState } from 'react';
import TMentor from '../TMentor/TMentor';
import './TMentors.css'

const TMentors = () => {
    const [tmmentors, setTmmentors] = useState([])

    useEffect(()=>{
     fetch('tmentor.json')
     .then(res=> res.json())
     .then(data=> setTmmentors(data));
    },[])
     return (
         <div className='container'> 
         <h1 className='text-center text-primary p-3 mt-2 mb-3'>Our Tourist Mentors</h1>
          <div id='tmentors'>
          {
            tmmentors.map(tmentor =><TMentor
            key={tmentor.id}
            tmentor={tmentor}
            >
            </TMentor>)
           }
          </div>
            </div>   
    );
};

export default TMentors;