import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  // ... other properties
};
function App() {
  const { isCopied, textRef, copyToClipboard } = useCopyToClipboard();
  const [name, setName] = useLocalStorage("name", "");
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [data, isLoading, error] = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div>
        <p>1)useCopyToClipboard hooks example</p>
        <input ref={textRef} value="Text to be copied" readOnly />
        <button onClick={copyToClipboard}>
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>

      <p>2)useCopyToClipboard hooks example</p>
      <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Hello, {name}!</p>
      </div>
      <p>3)useFetch hooks example</p>
      <div>
        {data?.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
