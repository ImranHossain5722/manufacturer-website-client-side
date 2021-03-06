import React from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const AllItem = ({ allItem, allItems, handelDelete }) => {
  const {
    _id,
    name,
    price,
    description,
    img,
    minimumOrder,
    availableQuantity,
  } = allItem;
  const navigate =useNavigate()
  const Button = ()=> {
    navigate('/dashboard/AddAProducts')
  }
  return (

      
    <div>
      <PageTitle title=" Mange All Products "></PageTitle>  
      <div class="card card-side bg-base-100 shadow-xl">
        
        <figure>
          <img className="w-96 h-96" src={img} alt="product" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Name:<span className="text-sm"> {name}</span>
          </h2>
          <p>{description}</p>
          <p>
            {" "}
            <span className="font-bold">Price:$ </span>
            {price}
          </p>

          <p>
            <span className="font-bold">Available Quantity: </span>
            {availableQuantity} <small>pieces</small>{" "}
          </p>
          <p>
            <span className="font-bold">Minimum Order: </span>
            {minimumOrder} <small>pieces</small>{" "}
          </p>
          <div class="card-actions justify-end">
            <button  onClick={()=>handelDelete(_id)} class="btn btn-primary">Delete Product</button>
            <button onClick={Button} class="btn btn-primary">Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItem;
