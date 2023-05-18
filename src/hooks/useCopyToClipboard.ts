import { useState, useRef } from 'react';

export const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);
    const textRef = useRef<HTMLInputElement>(null);

    const copyToClipboard = () => {
        if (textRef.current) {
            textRef.current.select();
            document.execCommand('copy');
            setIsCopied(true);
        }
    };

    return { isCopied, textRef, copyToClipboard };
};