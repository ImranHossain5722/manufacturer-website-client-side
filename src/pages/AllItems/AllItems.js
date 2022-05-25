import React, { useEffect, useState } from "react";
import AllItem  from "./AllItem";
const AllItems = () => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/manufacturerItems")
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);
  return (
    <div>
      <div class="divider w-10 h-1 mx-auto bg-primary"></div>

      <div className="grid justify-items-center gap-8 p-36">
        {allItems.map(allItem =><AllItem key={allItem._id} allItem={allItem}></AllItem>
        )}
      </div>
    </div>
  );
};

export default AllItems;
