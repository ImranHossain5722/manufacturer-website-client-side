import React, { useEffect, useState } from "react";
import AllItem from "./AllItem";
const AllItems = () => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch("https://warm-journey-62382.herokuapp.com/manufacturerItems")
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);
  //for delete
  const handelDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete product");
    if (proceed) {

      const url = `https://warm-journey-62382.herokuapp.com/manufacturerItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = allItems.filter(
            (allItems) => allItems._id !== id
          );
          setAllItems(remaining);
        });
    }
  };
  
  return (
    <div>
      <div class="divider w-10 h-1 mx-auto bg-primary"></div>

      <div className="grid justify-items-center gap-8 p-36">
        {allItems.map((allItem) => (
          <AllItem key={allItem._id} allItem={allItem}
          handelDelete={handelDelete} allItems={allItems}
          ></AllItem>
          
        ))}
        
      </div>
    </div>
  );
};

export default AllItems;
