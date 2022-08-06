import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

  };
  return (
    <div className="w-50 mx-auto">
      <h1>Thsi Is Customer Review Pagess</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3 " placeholder="Name" {...register("firstName", { required: true, maxLength: 20 })} />
      <textarea rows="5" cols="50" className="mb-3" placeholder="Comment" {...register("lastName", { required: true, maxLength: 20 })} />
      <input className="mb-3" placeholder="Mark Out Of 10" type="number" {...register("age",)} />
      <input type="submit" />
    </form>
    </div>
  );
};

export default Review;
