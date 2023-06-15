"use client";

import { API_ENDPOINT } from "@utils/constants";
import useFetch from "@hooks/useFetch";
import { ICountryDetails } from "@models/ICountryDetails";
import CountryItem from "./CountryItem";
import Loader from "./Common/Loader";
import GeoLocationSort from "./GeoLocationSort";
import { useEffect, useState } from "react";
import { ILatLong } from "@models/ILatLong";
import { haversine } from "@utils/haversineFormula";

/**
 * Countries list component.
 * @returns Node to render.
 */
const CountriesList = () => {
  const { data, isLoading } = useFetch<ICountryDetails[]>(API_ENDPOINT, [
    "countries",
  ]);

  /**
   * All countries
   */
  const [countries, setCountries] = useState<ICountryDetails[]>([]);

  /**
   * Sorting loading state
   */
  const [isSorting, setIsSorting] = useState<boolean>(false);

  /**
   * Sort countries based on GeoLocation
   * @param location User's current location
   */
  const handleSort = (location: ILatLong) => {
    setIsSorting((prev) => !prev);
    if (data && location) {
      const sorted = [...data].sort((a, b) => {
        const [firstLat, firstLng] = a.capitalInfo.latlng;
        const [secondLat, secondLng] = b.capitalInfo.latlng;

        const distance1 = haversine(location, {
          latitude: firstLat,
          longitude: firstLng,
        });

        const distance2 = haversine(location, {
          latitude: secondLat,
          longitude: secondLng,
        });

        return distance1 - distance2;
      });

      setCountries(sorted);
    }
    setIsSorting((prev) => !prev);
  };

  useEffect(() => {
    setCountries(data ?? []);
  }, [data]);

  if (isLoading || isSorting) {
    return <Loader />;
  }

  return (
    <>
      <GeoLocationSort handleSort={handleSort} />
      <div className="flex w-full flex-wrap">
        {countries.map((country, index: number) => {
          const flag = country.flags.svg;
          const name = country.name.common;

          return (
            <CountryItem key={`${name}-${index}`} flag={flag} name={name} />
          );
        })}
      </div>
    </>
  );
};

export default CountriesList;
