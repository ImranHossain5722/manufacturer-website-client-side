import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import PageTitle from "../../Shared/PageTitle/PageTitle";


const Dashboard = () => {
  const [user] =useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div className="">
      <PageTitle title="Dashboard"></PageTitle>
        <div class="drawer drawer-mobile ">
        <input id="my-DashboardDrawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <h2 className="text-4xl text-primary text-center p-4 font-bold uppercase">
            Welcome to your Dashboard
            
          </h2>
          <Outlet />
        </div>
        <div class="drawer-side drop-shadow-xl my-5 py-6  justify-center items-center">
          <label for="my-DashboardDrawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addreview">Add a review</Link>
            </li>
            
            {

              admin &&<>
              <li>
              <Link to="/dashboard/users">All users</Link>
            </li>
              <li> <Link to='/dashboard/AddAProducts'>
              Add A Products
                </Link></li>
              <li> <Link to='/dashboard/ManageAllOrders'>
              Manage All Orders
                </Link></li>

              <li> <Link to='/dashboard/allItems'>
              Manage Products
                </Link></li>



              </>
            }
            {/* { 
             admin && <>
             <li> <Link to="/dashboard/users">All Users</Link></li>

             <li> <Link to="/dashboard/addDoctor">ADD Doctor</Link></li>
            
             <li> <Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
    
          
            
             </>} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
