import React from "react";
import imran from "../../Assets/images/imran.png";
const MyPortfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={imran} class="max-w-sm rounded-xl shadow-2xl" />
          <div className="px-16">
            <h1 class="text-4xl font-bold mb-6">
              <span className="text-primary">Name:</span> Imrran Hossain
            </h1>
            <p class="text-justify">
              <span className="text-4xl font-bold text-primary">
                About me:
              </span>
              I live in Dhaka. I finish my bachelor's degree at a national
              college. During this time I also completed some programming
              courses. last two half years I do freelance work as a WordPress
              developer in the Fiverr marketplace. I already completed 90+
              projects in the Fiverr marketplace. I love programming that's why
              I also learn Html, CSS, bootstrap, tailwind, javascript,
              React.js,Node.js, MongoDB database, etc. my wish is one day I
              wanna become a senior full-stack web developer. I hope to start my
              own company one day.
            </p>
            <p class=" mt-6 text-justify">
              <span className="text-xl font-bold text-primary">
              Links to my development website: </span>

              <a href='https://carsale-a3464.web.app'>
              <button   class="btn btn-sm btn-primary">Use React </button>
              </a>

              <a href='https://techntag.com/'>
              <button class="btn btn-sm btn-primary">Use wordpress </button>
              </a>
              
              </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MyPortfolio;
