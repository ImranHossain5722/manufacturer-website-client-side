import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";

import PageTitle from "../../../Shared/PageTitle/PageTitle";
import { useAuthState } from "react-firebase-hooks/auth";
const MyProfile = () => {
  const [authUser] = useAuthState(auth);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://warm-journey-62382.herokuapp.com/user/=${authUser?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        email: `${authUser?.email}`,
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        
      });
  }, [authUser?.email]);
  console.log(authUser)

  return (
    <div className="mx-16">
         <h1 className=" text-center text-2xl font-bold m-10"> My Profile </h1>
      <PageTitle title="My Profile"></PageTitle>

      <div class="hero  bg-base-200  p-10">
         
        <div class="hero-content flex-col lg:flex-row">
          <img src={
              authUser?.photoURL
                // user?.photoURL
                //   ? user.photoURL: authUser?.photoURL? authUser?.photoURL: "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              }
              alt="userPhoto"
              className="w-24 rounded-full"
          />
          
          <div>
            <p class="">Your Name : {authUser?.displayName}</p>
            <p class="py-6">
              Your Email : {authUser?.email}
              
            </p>
            <button class="btn btn-sm btn-primary">Edit Profile</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
