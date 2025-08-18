import React from "react";
import type { CountryObj } from "../../types";
import {formatSize} from "~/lib/utils";

const CountryCard = ({
  country: {
    name,
    population,
    region,
    capital,
    flags: { svg },
  },
}: {
  country: CountryObj;
}) => {
  return (
    <div className={"max-w-[150px] h-48 flex flex-col justify-center rounded-[4px] bg-blue-900 my-4 cursor-pointer"} >
      <img src={svg} alt={`${name} flag`} className={"w-[150px] h-full object-cover rounded-t-[4px]"} />

      <div className={"ml-3 pt-3 pb-5"}>
        <h1 className={"font-bold text-[10px]"}>{name}</h1>

        <div className={"font-semibold text-[8px] mt-2"}>
          <p>
            Population: <span className={"font-light text-gray-300"}>{formatSize(population)}</span>
          </p>
          <p>
            Region: <span className={"font-light text-gray-300"}>{region}</span>
          </p>
          <p>
            Capital: <span className={"font-light text-gray-300"}>{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;