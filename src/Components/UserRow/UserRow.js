import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
const {email,role ,index} = user
const createAdmin =()=>{
fetch(`http://localhost:5000/user/admin/${email}`,{
    method:'PUT',
    headers:{
       authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
})
.then(res=>{
if(res.status ===403 ){

toast.error('Failed to Create an admin')
}

  return  res.json()})
.then(data => {
    if(data.modifiedCount > 0){
    
        refetch();
    toast.success('successfully creat admin')
    }

    
})

}
    return (
    
            <tr>
              <th>1</th>
              <td>{email}</td>
              <td>{role !== 'admin' && <button onClick={createAdmin} className='btn btn-xs'> Create Admin </button>}</td>
            </tr>
    
    );
};

export default UserRow;