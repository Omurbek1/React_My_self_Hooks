import React from "react";
import useDrag from "../hooks/useDrag";

export default function UseDragExampple() {
  const [isDragging, position, dragRef, handleMouseDown] = useDrag();
  return (
    <div
      ref={dragRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
    >
      Drag me!
      <h1>Drag me!</h1>
      <h1>Drag me!</h1>
      <h1>Drag me!</h1>
    </div>
  );
}
