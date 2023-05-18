import React from "react";
import useList from "../hooks/useList";

type Item = {
  id: number;
  name: string;
};
function UseListExample() {
  const [list, addItem, removeItem, clearList] = useList();

  const handleAddItem = () => {
    // Add a new item to the list
    const newItem: Item = {
      id: Date.now(),
      name: "New Item",
    };
    addItem(newItem);
  };

  const handleRemoveItem = (id: number) => {
    // Remove an item from the list by its ID
    removeItem(id);
  };

  const handleClearList = () => {
    // Clear the entire list
    clearList();
  };
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleClearList}>Clear List</button>
    </div>
  );
}

export default UseListExample;
