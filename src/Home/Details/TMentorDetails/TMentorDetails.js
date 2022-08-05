// import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import img1 from "../../../images/TMDitles/img_1.jpg";
import img2 from "../../../images/TMDitles/img_2.jpg";
import img3 from "../../../images/TMDitles/img_3.jpg";
import img4 from "../../../images/TMDitles/img_4.jpg";
import img5 from "../../../images/TMDitles/img_5.jpg";
import img6 from "../../../images/TMDitles/img_6.jpg";

const TMentorDetails = () => {
  const { tmentordetails } = useParams();

  console.log(tmentordetails);

  // const [tmmentors, setTmmentors] = useState([])
  return (
    <div>
      <h1>ff{tmentordetails}</h1>
      <div className="container">
        <h2 className="mb-1 text-center text-danger">Our Special Chef</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img className="img-fluid img-thumbnail" src={img1} alt="" />
            <h3 className="text-center mt-1 mb-1 p-1 text-primary">Nicholas</h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img className="img-fluid img-thumbnail" src={img2} alt="" />
            <h3 className="text-center mt-1 mb-1 p-1 text-primary">Eric</h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img className="img-fluid img-thumbnail" src={img3} alt="" />
            <h3 className="text-center mt-1 mb-1 p-1 text-primary">Jonathan</h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img className="img-fluid img-thumbnail" src={img4} alt="" />
            <h3 className="text-center mt-1 mb-1 p-1 text-primary">Stephen</h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img className="img-fluid img-thumbnail" src={img5} alt="" />
            <h3 className="text-center mt-1 mb-1 p-1 text-primary">Justin</h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img className="img-fluid img-thumbnail" src={img6} alt="" />
            <h3 className="text-center mt-1 mb-1 p-1 text-primary">Benjamin</h3>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/chackout">
          <button className="btn btn-primary">Chackoud</button>
        </Link>
      </div>
    </div>
  );
};

export default TMentorDetails;
