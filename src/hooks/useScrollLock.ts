import { useEffect } from 'react';

const useScrollLock = (lockScroll: boolean) => {
    useEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;

        if (lockScroll) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [lockScroll]);
};

export default useScrollLock;
