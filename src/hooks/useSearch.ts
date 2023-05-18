import { useState, useEffect } from 'react';

type SearchResult = {
    id: number;
    name: string;
    // Add more properties as needed
};

const useSearch = (): [string, SearchResult[], (query: string) => void] => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    const search = (query: string) => {
        setQuery(query);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (query.trim() === '') {
                setSearchResults([]);
                return;
            }

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${encodeURIComponent(query)}`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data);
                } else {
                    throw new Error('Failed to fetch search results');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [query]);

    return [query, searchResults, search];
};

export default useSearch;
