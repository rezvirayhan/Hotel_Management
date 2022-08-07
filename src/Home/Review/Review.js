import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
   fetch('http://localhost:5000/customerReview',{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(data),
   })
   .then((res)=> res.json())
   .then((result)=> console.log(result));
   console.log(data); 

  };
  return (
    <div className="w-50 mx-auto">
      <h1>Thsi Is Customer Review Pagess</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3 " placeholder="Name" {...register("firstName", { required: true, maxLength: 20 })} />
      
      <textarea rows="5" cols="50" className="mb-3" placeholder="Comment" {...register("comment", { required: true })} />

      <input className="mb-3 " type="number" placeholder="Mark Out Of 10" {...register("Mark", { required: true })} />


      <select className="mb-3 p-2" {...register("selected")}>
        <option value="Good">Good</option>
        <option value="Best">Best</option>
        <option value="Better">Better</option>
        <option value="Vary Good">Very Good</option>
        <option value="Bad">Bad</option>
        <option value="Very Bad">Very Bad</option>
      </select>
      <input className="mb-3" type="submit" />
    </form>
    </div>
    
  );
};

export default Review;
