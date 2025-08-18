import React, { useEffect, useState } from "react";
import SearchBar from "~/components/SearchBar";
import type { CountryObj } from "../../types";
import { loadData } from "~/lib/utils";
import CountryCard from "~/components/CountryCard";
import FilterDropdown from "~/components/FilterDropdown";

const CountryList = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [countryList, setCountryList] = useState<CountryObj[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string>("");

  useEffect(() => {
    loadData(searchTerm, selectedRegions).then((data) => {
      setCountryList(data);
    });
  }, [searchTerm, selectedRegions]);

  return (
    <section className={"px-5 py-8 min-h-screen"}>
      <div
        className={
          "flex flex-col sm:flex-row gap-5 items-start sm:items-center sm:justify-between"
        }
      >
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <FilterDropdown
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
          countryList={countryList}
        />
      </div>

      <div className={"flex flex-col sm:flex-row flex-wrap gap-2 mt-2 items-center justify-between"}>
        {countryList.length === 0 ? (
          <h1>Can't find any matching countries...</h1>
        ) : (
          countryList.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))
        )}
      </div>
    </section>
  );
};

export default CountryList;