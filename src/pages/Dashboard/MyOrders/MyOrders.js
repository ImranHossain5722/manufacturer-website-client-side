import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import PageTitle from "../../../Shared/PageTitle/PageTitle";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://warm-journey-62382.herokuapp.com/orders?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setMyOrder(data));
    }
  }, [user]);
  return (
    <div>
      <PageTitle title="My Orders"></PageTitle>
      My Orders {myOrder.length}
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {myOrder.map((o, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{o.productName}</td>
              <td>{o.price}</td>
              <td>{o.quantity}</td>
              <td>
                {(o.price && ! o.paid )&& <Link to={`/dashboard/Payment/${o._id}`}><button className="btn btn-primary">payment</button> </Link> }
                {(o.price &&  o.paid )&& <span className="text-success">paid</span>}
              
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
