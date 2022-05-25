import React, { useEffect, useState } from "react";

const Reviews = () => {
    const [reviews, setReviews] =useState([])
       
    useEffect(()=>
    {fetch("http://localhost:5000/manufacturerItems")
      .then((res) => res.json())
      .then((data) => setReviews(data))}

    
    ,[])



  return (
    <div>
      <h2 className="text-center text-2xl">Our Client Feedback </h2>

     
    </div>
  );
};

export default Reviews;
