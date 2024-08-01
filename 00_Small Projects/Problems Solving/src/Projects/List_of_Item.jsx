import React from "react";

function List_of_Item() {
  const items = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
  return (
    <div className=" text-3xl">
      {items.map((value, index) => {
        return <li key={index}> {value} </li>;
      })}
    </div>
  );
}

export default List_of_Item;
