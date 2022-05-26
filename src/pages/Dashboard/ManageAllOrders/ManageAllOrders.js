import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import OrderRow from "./OrderRow";

const ManageAllOrders = () => {
  const {
    data: allOrder,
    isLoading,
    refetch,
  } = useQuery("allOrder", () =>
    fetch("https://warm-journey-62382.herokuapp.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl">ALl Order: {allOrder.length}</h2>

      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th> Name</th>
            <th>User Email </th>
            <th>Order Quantity</th>
          </tr>
        </thead>
        <tbody>
          {allOrder.map((order) => (
            <OrderRow key={order._id} order={order}></OrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;
