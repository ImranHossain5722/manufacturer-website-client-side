import React from 'react';
import { useQuery } from "react-query";
import UserRow from "../../../Components/UserRow/UserRow";
import Loading from "../../../Shared/Loading/Loading";

const AllUser = () => {
  const {data:users, isLoading, refetch} = useQuery('users', ()=> fetch('http://localhost:5000/user' , {
    method:'GET', 
    headers:{
     authorization:`Bearer ${localStorage.getItem('accessToken')}`}
    
    }).then(res=>res.json()));
if(isLoading){

    return <Loading/>
}

  return (
    <div>
      <h2>All users:{users.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>User Email</th>
              <th>User Role</th>
            </tr>
          </thead>
          <tbody>
               {
                 users.map(  user => <UserRow key={user._id} user={user} refetch={refetch} > </UserRow> )
               }       
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
