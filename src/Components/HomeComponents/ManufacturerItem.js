import React from "react";
import { useNavigate } from "react-router-dom";

const ManufacturerItem = ({ manufacturerItem }) => {
  const {
    _id,
    name,
    price,
    quantity,
    description,
    img,
    minimumOrder,
    availableQuantity,
    
  } = manufacturerItem;

  const navigate =useNavigate()
  const buyButton = _id => {
    navigate(`ManufacturersItems/${_id}`)
  }
  return (
    <div className="">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className=" w-96 h-72"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Name:<span className="text-sm"> {name}</span>
          </h2>
          <p>{description}</p>
          <p><span className="font-bold">Price:$ </span>{price}</p>
          <p><span className="font-bold">Available Quantity:  </span>{availableQuantity} <small>pieces</small> </p>
          <p><span className="font-bold">Minimum Order:  </span>{minimumOrder} <small>pieces</small> </p>
          
          <div class="card-actions justify-end">
          <button onClick={()=>buyButton(_id)} class="btn btn-primary">Buy Now</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerItem;
