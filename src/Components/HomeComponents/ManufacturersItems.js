import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManufacturerItem  from './ManufacturerItem'

const ManufacturersItems = () => {

const navigate =useNavigate()
  const moveToAllProductPage = () => {
    navigate('/manufacturersItems')
  }
    const [manufacturersItems, setManufacturersItems] =useState([])

    const manufacturers = manufacturersItems.slice(0,6)
    useEffect(()=>{

            fetch('http://localhost:5000/manufacturerItems')
            .then(res => res.json())
            .then(data => setManufacturersItems (data))

    },[])

    return (
        
        <div>
            <h1 className='text-4xl text-center font-bold mt-11'> Our Manufacturers Products {manufacturersItems.length} </h1>
            <div class="divider w-10 h-1 mx-auto bg-primary"></div> 

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-12' >
                {
                    manufacturers.map( manufacturerItem => <ManufacturerItem key={manufacturerItem._id} manufacturerItem={manufacturerItem} ></ManufacturerItem>)
                }
            </div> 
        </div>
    );
};

export default ManufacturersItems;