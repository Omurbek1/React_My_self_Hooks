import { useState, useEffect } from 'react';

type Coordinates = {
    latitude: number | null;
    longitude: number | null;
};

const useCurrentLocation = (): Coordinates => {
    const [coordinates, setCoordinates] = useState<Coordinates>({
        latitude: null,
        longitude: null,
    });

    useEffect(() => {
        const fetchCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const { latitude, longitude } = position.coords;
                        setCoordinates({
                            latitude,
                            longitude,
                        });
                    },
                    error => {
                        console.error(error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        fetchCurrentLocation();
    }, []);

    return coordinates;
};

export default useCurrentLocation;
