import { useEffect, useState } from "react";
import { getBorderCountries } from "~/lib/utils";

const BorderCountry = ({ country, darkMode }: { country: string; darkMode:boolean }) => {
  const [countryName, setCountryName] = useState<string>("");

  useEffect(() => {
    getBorderCountries(country).then((r) => setCountryName(r));
  }, []);

  return (
    <div
      className={`rounded-[4px] ${darkMode ? "bg-blue-900" : "bg-gray-400"} w-fit text-gray-300 text-center`}
    >
      <p className={"py-1 px-3"}>{countryName}</p>
    </div>
  );
};

export default BorderCountry;