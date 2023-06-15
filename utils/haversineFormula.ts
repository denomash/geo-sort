import { ILatLong } from "@models/ILatLong";

const toRad = (v: number) => {
  return (v * Math.PI) / 180;
};

/**
 * Haversine formula to calculate the distance in between two lat-long points.
 * @param l1 first lat-long point
 * @param l2 second lat-long point
 * @returns Distance between the two ponts
 */
export const haversine = (l1: ILatLong, l2: ILatLong) => {
  let R = 6371; // km

  const x1 = l2.latitude - l1.latitude;
  const dLat = toRad(x1);

  const x2 = l2.longitude - l1.longitude;
  const dLon = toRad(x2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(l1.latitude)) *
      Math.cos(toRad(l2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;
  return d;
};
