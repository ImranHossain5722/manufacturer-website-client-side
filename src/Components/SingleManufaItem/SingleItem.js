import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import OrderForm from '../OrderForm/OrderForm'


const SingleItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/manufacturerItems/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className=" mx-24 min-h-screen">

      <div class="card lg:card-side bg-base-100 shadow-xl p-32">
        <figure>
          <img className="w-96 "
            src={item.img}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title mt-12">Name: {item.name}</h2>
          <p>{item.description}</p>
          <p><span className="font-bold">Price:$ </span>{item.price}</p>
          <p><span className="font-bold">Available Quantity:  </span>{item.availableQuantity} <small>pieces</small> </p>
          <p><span className="font-bold">Minimum Order:  </span>{item.minimumOrder} <small>pieces</small> </p>
          <div class="card-actions justify-end">
          <button class="btn btn-primary">check Out</button>
          </div>
        </div>
      </div>

        <OrderForm item={item}></OrderForm>
    </div>
  );
};

export default SingleItem;
