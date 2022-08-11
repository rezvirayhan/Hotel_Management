import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const FoodBooking = () => {

  const {BookingId} = useParams ();

  const[foodservice, setFoodservice]= useState({});

  useEffect(()=>{
    fetch(`http://localhost:5000/singleProduct/${BookingId}`)
    .then(res => res.json())
    .then(data=> setFoodservice(data))
  },[])

  console.log(foodservice);




  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <h2 className="mb-2 text-danger mt-3">Product Information & Checking</h2>
            <img className="img-fluid img-thumbnail w-75 mt-3" src={foodservice.img} alt="" />
          <h3>Name: {foodservice.name}</h3>
          <b><p>{foodservice.descripition}</p></b>
          <button type="button" class="btn btn-danger"><b>$ {foodservice.price} Only</b></button>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <h2 className="text-primary mt-3">Thsi Is Product Order Pagess</h2>
            <form
              className="d-flex flex-column mt-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="mb-3 "
                placeholder="Your Name"
                {...register("firstName", { required: true, maxLength: 20 })}
              />
              <small>
                <b>
                  Do you remember? Order on that date. Select the date after 7
                  days. Thank you
                </b>
              </small>
              <input
                type="date"
                className="mb-3 p-1 mt-1"
                {...register("date", { required: true, maxLength: 20 })}
              />
              <textarea
                rows="5"
                cols="50"
                className="mb-3"
                placeholder="Your Address"
                {...register("Address", { required: true })}
              />
              <input className="mb-3" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBooking;
