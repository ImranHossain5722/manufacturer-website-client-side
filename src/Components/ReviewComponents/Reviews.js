import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
    const [reviews, setReviews] =useState([])
       
    useEffect(()=>
    {fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))}

    
    ,[])

  return (
    <div>
      <h2 className="text-center text-4xl font-bold">What our Client's Says </h2>
      <div class="divider w-10 h-1 mx-auto bg-primary"></div> 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-12">
        {
            reviews.map(reviewItem => <Review key={reviewItem._id} reviewItem={reviewItem}></Review>)
        }
        </div>
    </div>
  );
};

export default Reviews;
