import React from "react";
import Banner from "../../Assets/images/home-banner.jpeg"
const TopBanner = () => {
  return (
    <div
      class="hero min-h-screen" 
      style={{
        background: `url(${Banner})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
      }} >
      <div class="hero-overlay bg-opacity-40"></div>
      <div class="hero-content text-left text-neutral-content">
        <div class="max-w-full">
          <h1 class="mb-5 text-5xl font-bold">Looking for a US</h1>
          <h1 class="mb-5 text-5xl font-bold">Leather Manufacturer?</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.<br/> In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
