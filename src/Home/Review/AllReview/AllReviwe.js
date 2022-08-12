import React, { useEffect, useState } from "react";
import Review from "../Review";
import "./AllReview.css";
const AllReviwe = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/customerReview")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h1 className="text-danger mt-3 mb-3 p-3 text-center">
        This Is All Review Pages
      </h1>
      <div id="service_container" className="container p-3">
        {review?.map((pd) => (
          <div>
            <h5>{pd?.firstName}</h5>
            <p>{pd?.comment}</p>
            <button className="btn btn-success">
              {" "}
              <span>
                <b>{pd?.Mark}</b>
              </span>{" "}
              Otu Of 10.{" "}
            </button>
            <h5>{pd?.selected}</h5>
          </div>
        ))}
      </div>
      <div className="mt-5 bg-info p-3">
        <Review></Review>
      </div>
    </div>
  );
};

export default AllReviwe;
