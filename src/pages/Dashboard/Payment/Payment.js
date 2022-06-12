import React from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query'
import Loading from'../../../Shared/Loading/Loading'

const Payment = () => {
const {id} =useParams()
const url= `https://warm-journey-62382.herokuapp.com/orders/${id}`

const {data:payment, isLoading} =useQuery(['orders',id],()=> fetch(url,{
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then(res=>res.json()))

  if(isLoading){

    return <Loading></Loading>
}
    return (
        <div>
            <h2 className=''>pay {id}</h2>
        </div>
    );
};

export default Payment;