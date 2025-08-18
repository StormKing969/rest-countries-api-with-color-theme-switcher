import React, { type ChangeEvent, type SetStateAction } from "react";
import { ImCross } from "react-icons/im";
import type { CountryObj } from "../../types";

const FilterDropdown = ({
  selectedRegions,
  setSelectedRegions,
  countryList,
}: {
  selectedRegions: string;
  setSelectedRegions: React.Dispatch<SetStateAction<string>>;
  countryList: CountryObj[];
}) => {
  const uniqueRegions = [...new Set(countryList.map((ele) => ele.region))];

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedRegions(e.target.value);
  };

  return (
    <div
      className={
        "bg-blue-900 rounded-[4px] px-3 flex flex-row items-center gap-2"
      }
    >
      <ImCross
        className={`w-2 ${!selectedRegions ? "hidden" : ""} cursor-pointer`}
        onClick={() => setSelectedRegions("")}
      />
      <select
        className="bg-blue-900 border-none py-4 text-center cursor-pointer text-[12px] disabled:opacity-50 disabled:cursor-not-allowed"
        onChange={handleOnChange}
        value={selectedRegions}
        disabled={uniqueRegions.length === 0}
      >
        <option value={""} hidden disabled>
          Filter by region
        </option>
        {uniqueRegions.map((uniqueRegion, index) => (
          <option key={index} value={uniqueRegion}>
            {uniqueRegion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;