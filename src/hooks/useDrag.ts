import { useState, useEffect, useRef } from 'react';

type Position = {
    x: number;
    y: number;
};

const useDrag = (): [boolean, Position, React.RefObject<HTMLDivElement>] => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const dragRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!isDragging) return;
            const newPosition: Position = {
                x: event.clientX,
                y: event.clientY,
            };
            setPosition(newPosition);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    return [isDragging, position, dragRef, handleMouseDown];
};

export default useDrag;
