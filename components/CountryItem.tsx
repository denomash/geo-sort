import { ICountryItem } from "@models/ICountryItem";
import Image from "next/image";

/**
 * Component to show country's flag and name.
 * @returns Node to render
 */
const CountryItem = ({ flag, name }: ICountryItem) => {
  return (
    <div className="flex items-center p-4 mb-4 mr-4 w-max h-min bg-slate-200 rounded">
      <Image src={flag} alt={`${name}-flag`} height={20} width={30} />
      <span className="pl-4 text-black">{name}</span>
    </div>
  );
};

export default CountryItem;
