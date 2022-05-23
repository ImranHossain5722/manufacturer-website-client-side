import React from "react";

const ManufacturerItem = ({ manufacturerItem }) => {
  const {
    name,
    price,
    quantity,
    description,
    img,
    availableQuantity,
    minimumOrder,
  } = manufacturerItem;

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
          <p><span className="font-bold">Quantity:  </span>{quantity} <small>pieces</small> </p>
          <p><span className="font-bold">Available Quantity:  </span>{availableQuantity} <small>pieces</small> </p>
          <p><span className="font-bold">Minimum Order:  </span>{minimumOrder} <small>pieces</small> </p>
          <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerItem;
