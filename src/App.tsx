import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";
import useForm from "./hooks/useForm";
import useScrollLock from "./hooks/useScrollLock";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  // ... other properties
};
type FormValues = {
  name: string;
  email: string;
  password: string;
  // Add more fields as needed
};
type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
  // Add more fields as needed
};

function App() {
  const [showModal, setShowModal] = useState(false);

  useScrollLock(showModal);
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

      <p>4)useForm hooks example</p>
      <div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>

        {showModal && (
          <div className="modal">
            {/* Modal content */}
            <button onClick={() => setShowModal(false)}>Close Modal</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
