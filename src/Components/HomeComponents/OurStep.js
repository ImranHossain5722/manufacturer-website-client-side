import React from "react";
import pan from "../../Assets/images/pancil.PNG";
import box from "../../Assets/images/Box.PNG";
import glob from "../../Assets/images/golb.PNG";
const OurStep = () => {
  return (
    <div className="bg-base-200">
         <h2 class="text-center text-4xl pt-5 font-bold">Our Steps </h2>
         <div class="divider w-10 h-1 mx-auto bg-primary mb-5"></div> 
      <ul class="w-1/2 ml-72 steps steps-vertical lg:steps-horizontal">
        <li class="step step-primary font-semibold ">Design and drawings</li>
        <li class="step step-primary font-semibold ">Sample production</li>
        <li class="step font-semibold ">Quantity production </li>
      </ul>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-12 ">
        <div class="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-20 pl-3" src={pan} alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">DESIGN AND DRAWINGS</h2>
            <p>
              The first step in turning your dream into a physical product is
              the design phase.
            </p>
          </div>
        </div>

        <div class="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-20" src={box} alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">SAMPLE PRODUCTION</h2>
            <p>
              We move on to making a physical productthat you can hold and test.
            </p>
          </div>
        </div>

        <div class="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-20" src={glob} alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">QUANTITY PRODUCTION</h2>
            <p>
              Once you’ve approved your sample product,we move onto final
              production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStep;
