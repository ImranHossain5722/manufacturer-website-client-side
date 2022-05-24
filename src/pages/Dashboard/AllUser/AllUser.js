import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useQuery} from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const AllUser = () => {

    const [users, setUsers] = useState([])

    const [user]=useAuthState(auth)

    // const {data: users,isLoading, refetch} = useQuery ('users', ()=>fetch('http://localhost:5000/user').then(res=>res.json()) )

    // if(isLoading){
    //     return <Loading/>
    // }
    useEffect(()=>{
        if(user){
            
           <Loading/>
        }else{
                
        fetch('http://localhost:5000/users')
        .then(res=>res.data)
        .then(data=> setUsers(data))
        }

        

    },[user])
    return (

        <div>
            users
            <h2>{users.length}</h2>
        </div>
    );
};

export default AllUser;