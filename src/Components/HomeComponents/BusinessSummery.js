import React from 'react';
import s1 from "../../Assets/images/s-1-.png";
import  s2 from "../../Assets/images/s-2-.png";
import s3 from "../../Assets/images/s-3-.png";
import s4 from "../../Assets/images/s-4-removebg-preview.png";

const BusinessSummery = () => {
    return (
        <div className='bg-base-100'>
         <h2 class="text-center text-4xl pt-5 font-bold">Our Business Summery  </h2>
         <div class="divider w-10 h-1 mx-auto bg-primary mb-5"></div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-12 ">
        <div class="card card-side w-60 bg-base-100 shadow-xl">
          <figure>
            <img className="w-20 pl-3" src={s1} alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-4xl">24</h2>
            <p>
            Luxury stores
            </p>
          </div>
        </div>

        <div class="card card-side w-60 bg-base-100 shadow-xl">
          <figure>
            <img className="w-20" src={s2} alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-4xl">145</h2>
            <p>
            Clothing retailers
            </p>
          </div>
        </div>

        <div class="card card-side w-60 bg-base-100 shadow-xl">
          <figure>
            <img className="w-20" src={s3} alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-4xl">61</h2>
            <p>
            Fashion retailers
            </p>
          </div>
        </div>

        <div class="card card-side w-60 bg-base-100 shadow-xl">
          <figure>
            <img className="w-20" src={s4} alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-4xl">249</h2>
            <p>
            Brand name labels
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BusinessSummery;