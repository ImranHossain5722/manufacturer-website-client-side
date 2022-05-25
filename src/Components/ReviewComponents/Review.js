import React from "react";

const Review = ({ reviewItem }) => {
  const { name, review, img } = reviewItem;

  return (
    <div>
      <div class="card w-96 bg-primary text-neutral-content">
        <div class="card-body items-center text-center">
          
          <p>{review}</p>
          <h2 class="card-title text-white">Name: {name}</h2>
          <div class="card-actions justify-end">
            <div class="avatar">
              <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt=''/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
