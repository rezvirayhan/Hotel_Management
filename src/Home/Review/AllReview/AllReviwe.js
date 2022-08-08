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
            {review?.map((pd) => (
              // <h1>{pd?.firstName}</h1>

              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{pd?.firstName}</h5>
                  <p class="card-text">
                   {pd?.comment}
                  </p>
                  <button className="btn btn-success"> <span><b>{pd?.Mark}</b></span> Otu Of 10. </button>
                  <h5>{pd?.selected}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AllReviwe;
