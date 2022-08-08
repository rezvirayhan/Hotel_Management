import React from "react";
import { useForm } from "react-hook-form";

const FoodBooking = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <h2>Thsi Is Product Detiles Pagess</h2>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <h2>Thsi Is Product Order Pagess</h2>
            <form
              className="d-flex flex-column"
              onSubmit={handleSubmit(onSubmit)}
            >

              <input
                className="mb-3 "
                placeholder="Your Name"
                {...register("firstName", { required: true, maxLength: 20 })}
              />
              <small><b>Do you remember?  Order on that date.  Select the date after 7 days. Thank you</b></small>
              <input type="date"
                className="mb-3 p-1"
                {...register("date", { required: true, maxLength: 20 })}
              />
              <textarea
                rows="5"
                cols="50"
                className="mb-3"
                placeholder="Your Address"
                {...register("Address", { required: true })}
              />
              <input className="mb-3" type="Done
              .00000000.03333333333333333333333333333+33333333333+
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              " />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBooking;
