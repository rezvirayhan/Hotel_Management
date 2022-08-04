import React from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


import img1 from'../../../images/TMDitles/img_1.jpg';
import img2 from'../../../images/TMDitles/img_2.jpg';
import img3 from'../../../images/TMDitles/img_3.jpg';


const TMentorDetails = () => {
  const { tmentordetails, name } = useParams();
  
  return (
    <div>
     <h1>ff{tmentordetails}</h1>
     <h1>ff{name}</h1>

      <div className="text-center">
        <Link to="/chackout">
          <button className="btn btn-primary">Chackoud</button>
        </Link>
      </div>
    </div>
  );
};

export default TMentorDetails;
