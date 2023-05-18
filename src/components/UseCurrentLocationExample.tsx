
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function UseCurrentLocationExample() {
  const coordinates = useCurrentLocation();
  return (
    <div>
      <p>Latitude: {coordinates.latitude}</p>
      <p>Longitude: {coordinates.longitude}</p>
    </div>
  );
}
