import React, { useState } from "react";
import useScrollLock from "../hooks/useScrollLock";

function UseScrollLockExample() {
  const [showModal, setShowModal] = useState(false);

  useScrollLock(showModal);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <div className="modal">
          {/* Modal content */}
          <button onClick={() => setShowModal(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default UseScrollLockExample;
