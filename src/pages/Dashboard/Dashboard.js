import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
            <div class="drawer drawer-mobile">
        <input id="dashboardSidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <h2 className="text-4xl text-primary text-center p-4 font-bold uppercase">
            Welcome to your Dashboard
          </h2>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="dashboardSidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addreview">Add a review</Link>
            </li>
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
