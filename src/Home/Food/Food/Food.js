import React from "react";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const { img, name, price, descripition } = food;
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div class="card mb-2 p-1">
        <img class="card-img-top img-thumbnail" src={img} alt="" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
           {descripition}
          </p>
          <b><h3 className=""> Price: ${price}</h3></b>
          <Link to={`bye`}>
            <button className="btn btn-success">Add To Card</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
