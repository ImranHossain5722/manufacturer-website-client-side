import React from "react";
import Photo from '../../Assets/images/photo-man.jpeg'
const OurCapability = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={Photo}
            class=" max-w-lg rounded-lg shadow-2xl"
          />
          <div className="px-12">
            <h1 class="text-5xl font-bold">Our Capabilities</h1>
            <p class="py-6">
            You’ve been inspired–now it’s time to make it happen. Transform your ideas into reality with Manufacturer Leather’s manufacturing capabilities. With over four decades of experience in leather craftsmanship and manufacturing
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCapability;
