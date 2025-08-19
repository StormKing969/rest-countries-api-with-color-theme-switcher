import type { CountryObj } from "../../types";
import { formatSize } from "~/lib/utils";

const CountryCard = ({
  country: {
    name,
    population,
    region,
    capital,
    flags: { svg },
  },
  toggleDarkMode,
}: {
  country: CountryObj;
  toggleDarkMode: boolean;
}) => {
  return (
    <div
      className={`max-w-[150px] h-48 flex flex-col justify-center rounded-[4px] ${toggleDarkMode ? "dark-mode" : "normal-mode"} my-4 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.5)]`}
    >
      <img
        src={svg}
        alt={`${name} flag`}
        className={"w-[150px] h-full object-cover rounded-t-[4px]"}
      />

      <div className={"ml-3 pt-3 pb-5"}>
        <h1 className={"font-bold text-[10px]"}>{name}</h1>

        <div className={"font-semibold text-[8px] mt-2"}>
          <p>
            Population:{" "}
            <span
              className={`font-light ${toggleDarkMode ? "text-gray-300" : "text-gray-500"}`}
            >
              {formatSize(population)}
            </span>
          </p>
          <p>
            Region:{" "}
            <span
              className={`font-light ${toggleDarkMode ? "text-gray-300" : "text-gray-500"}`}
            >
              {region}
            </span>
          </p>
          <p>
            Capital:{" "}
            <span
              className={`font-light ${toggleDarkMode ? "text-gray-300" : "text-gray-500"}`}
            >
              {capital}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;