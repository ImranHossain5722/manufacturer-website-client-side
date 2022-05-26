import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const OrderForm = ({ item }) => {
  const { name, price, availableQuantity, minimumOrder } = item;
  const [user, loading, error] = useAuthState(auth);

  const orderForm = (event) => {
    event.preventDefault();
    const orders = {
      productName: name,
      price,
      quantity: event.target.quantity.value,
      userName: user.displayName,
      userEmail: user.email,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((inserted) => {
           if( inserted.insertedId){

            toast.success('Successfully place order done. Your Oder Under Conformation   ')
            
           }
           else{
               toast.error('Failed Order try again')
           }
      });
  };

 
  return (
    <div >
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Order Form</h2>
          <form
        onSubmit={orderForm}
        className="gap-3"
      >
        <label className="font-bold">Product Name </label>
        <br />
        <input
          type="text"
          value={name}
          required
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
        <br />

        <label className="font-bold">Product Price</label>
        <br />
        <input
          type="text"
          value={price}
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
        <br />

        <label className="font-bold" >Quantity (Minimum Order 20 pieces)</label>
        <br />
        <input
          type="number"
          id="quantity"
          required
          name="quantity"
          min="20"
          max="499"
          
          class="input input-bordered w-full max-w-xs"
        />
        <br />

        <label className="font-bold">User Name</label>
        <br />
        <input
          type="text"
          disabled
          name="name"
          value={user?.displayName || ""}
          class="input input-bordered w-full max-w-xs"
        />
        <br />
        <label className="font-bold" > User Email</label>
        <br />
        <input
          type="text"
          name="email"
          disabled
          value={user?.email || ""}
          class="input input-bordered w-full max-w-xs"
        />
        <br />
        <label className="font-bold" > User phone number</label>
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Your phone number"
          class="input input-bordered w-full max-w-xs"
        />
        <br />
        <input className="btn btn-primary mt-3" type="submit" value="Order" />
      </form>
        </div>
      </div>
      
    </div>
  );
};

export default OrderForm;
