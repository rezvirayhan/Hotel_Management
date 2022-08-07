import React, { useEffect, useState } from "react";

const AllReviwe = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/customerReview")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h1>This Is All Review Pages</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
           {
            review?.map((pd)=>(
                
                <h1>{pd?.firstName}</h1>
            ))
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviwe;
