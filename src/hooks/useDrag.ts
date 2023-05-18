// import { useState, useEffect, useRef, RefObject } from 'react';

// type Position = {
//     x: number;
//     y: number;
// };

// interface IDivPosition {
//     divRef: RefObject<HTMLDivElement>;
// }


// const useDrag = (): [boolean, Position, React.RefObject<IDivPosition>] => {
//     const [isDragging, setIsDragging] = useState(false);
//     const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
//     const dragRef = useRef<IDivPosition | null>

//     useEffect(() => {
//         const handleMouseMove = (event: MouseEvent) => {
//             if (!isDragging) return;
//             const newPosition: Position = {
//                 x: event.clientX,
//                 y: event.clientY,
//             };
//             setPosition(newPosition);
//         };

//         const handleMouseUp = () => {
//             setIsDragging(false);
//         };

//         if (isDragging) {
//             document.addEventListener('mousemove', handleMouseMove);
//             document.addEventListener('mouseup', handleMouseUp);
//         }

//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//         };
//     }, [isDragging]);

//     const handleMouseDown = () => {
//         setIsDragging(true);
//     };

//     return [isDragging, position, dragRef, handleMouseDown];
// };

// export default useDrag;
