import { useEffect, useState } from "react";
import { getBorderCountries } from "~/lib/utils";

const BorderCountry = ({
  country,
  darkMode,
}: {
  country: string;
  darkMode: boolean;
}) => {
  const [countryName, setCountryName] = useState<string>("");

  useEffect(() => {
    getBorderCountries(country).then((r) => setCountryName(r));
  }, []);

  return (
    <div
      className={`rounded-[4px] ${darkMode ? "dark-mode text-gray-300" : "normal-mode normal-mode-input"} w-fit text-center shadow-[0_4px_12px_rgba(0,0,0,0.5)]`}
    >
      <p className={"py-1 px-3"}>{countryName}</p>
    </div>
  );
};

export default BorderCountry;