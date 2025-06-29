import Places from "./Places.jsx";
import { useEffect, useState } from "react";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);

      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((pos) => {
          const sorted = sortPlacesByDistance(
            places,
            pos.coords.latitude,
            pos.coords.longitude
          );
          setAvailablePlaces(sorted);
        });
        setIsLoading(false);
      } catch (err) {
        setError({
          message:
            err.message ||
            "Could not fetch places data, please try again later",
        });
        setIsLoading(false);
      }
    }

    fetchPlaces();
  }, []);

  return (
    <>
      {error === undefined ? (
        <Places
          title="Available Places"
          places={availablePlaces}
          loadingText="Fetching places data..."
          isLoading={isLoading}
          fallbackText="No places available."
          onSelectPlace={onSelectPlace}
        />
      ) : (
        <ErrorPage title="Error!" message={error.message} />
      )}
    </>
  );
}
