import { useState, useEffect } from "react";

type Item = {
    id: number;
    name: string;
    // Add more properties as needed
};

const useList = (): [
    Item[],
    (item: Item) => void,
    (id: number) => void,
    () => void
] => {
    const [list, setList] = useState<Item[]>([]);

    const addItem = (item: Item) => {
        setList((prevList) => [...prevList, item]);
    };

    const removeItem = (id: number) => {
        setList((prevList) => prevList.filter((item) => item.id !== id));
    };

    const clearList = () => {
        setList([]);
    };

    useEffect(() => {
        // Fetch the list of items from the API
        const fetchItems = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if (response.ok) {
                    const data = await response.json();
                    setList(data);
                    console.log(data);
                } else {
                    throw new Error("Failed to fetch items");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchItems();
    }, []);

    return [list, addItem, removeItem, clearList];
};

export default useList;
