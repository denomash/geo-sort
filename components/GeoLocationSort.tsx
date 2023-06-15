import { ILatLong } from "@models/ILatLong";
import Button from "./Common/Button/Button";

/**
 * Get geolocation and sort
 * @returns Node to render
 */
const GeoLocationSort = ({
  handleSort,
}: {
  handleSort: (val: ILatLong) => void;
}) => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sort);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const sort = (position: GeolocationPosition) =>
    handleSort({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

  return (
    <div className="mb-6">
      <Button onClick={getLocation}>GeoLocation Sort</Button>
    </div>
  );
};

export default GeoLocationSort;
