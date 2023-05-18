import React, { useEffect, useState } from "react";
import useDebouncedValue from "../hooks/useDebouncedValue";

function UseDebouncedValueExample() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebouncedValue(inputValue, 500);

  useEffect(() => {
    // Perform some action with the debounced value
    console.log(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

export default UseDebouncedValueExample;
