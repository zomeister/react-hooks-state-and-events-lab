import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")

  function handleFilterChange(e) {
    setCategory(e.target.value)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        { items.filter(item => {
          if (item.category === selectedCategory || selectedCategory === "All") {return true}
          
          }).map((filteredItem) => (
          <Item key={filteredItem.id} name={filteredItem.name} category={filteredItem.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
