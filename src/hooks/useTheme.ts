import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useTheme = (): [Theme, () => void] => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        // You can use local storage or any other method to persist the theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // You can use local storage or any other method to persist the theme preference
        localStorage.setItem('theme', theme);
        // Apply the theme to the document or any other part of your application
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, toggleTheme];
};

export default useTheme;
