import { useEffect, useState } from "react";
import Navbar from "~/components/Navbar";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { formatSize } from "~/lib/utils";
import type { CurrencyObj, LanguageObj } from "../../types";
import BorderCountry from "~/components/BorderCountry";

export const meta = () => [
  {
    title: "Country",
  },
  {
    name: "description",
    content: `Detailed information about a country`,
  },
];

const Country = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const countryDetail = location.state?.country;
  const darkModeState = location.state?.toggleDarkMode || true;
  const [darkMode, setDarkMode] = useState<boolean>(darkModeState);

  if (!countryDetail) {
    return null;
  }

  useEffect(() => {
    if (!countryDetail) {
      navigate("/");
    }
  }, [countryDetail, navigate]);

  return (
    <main
      className={`${darkMode ? "dark-mode" : "normal-mode"} max-w-[1440px] min-w-[340px] w-full h-fit`}
    >
      <Navbar toggleDarkMode={darkMode} setToggleDarkMode={setDarkMode} />

      <Link to={"/"}>
        <div
          className={
            "mt-8 mb-3 mx-5 px-5 py-1 bg-blue-900 w-fit rounded-[4px] text-gray-300 flex flex-row gap-2 items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          }
        >
          <IoArrowBackOutline />
          <p>Back</p>
        </div>
      </Link>

      <div className={"mx-5 mt-14 flex flex-col md:flex-row md:my-8"}>
        <img src={`${countryDetail.flag}`} alt={`${countryDetail.name} flag`} className={"md:size-1/2 md:min-h-[250px] md:w-full"} />

        <div className={"my-8"}>
          <h1 className={"font-bold text-2xl my-5"}>{countryDetail.name}</h1>

          <div className={"flex flex-col gap-2"}>
            <p>
              Native Name: <span>{countryDetail.nativeName}</span>
            </p>
            <p>
              Population: <span>{formatSize(countryDetail.population)}</span>
            </p>
            <p>
              Region: <span>{countryDetail.region}</span>
            </p>
            <p>
              Sub Region: <span>{countryDetail.subregion}</span>
            </p>
            <p>
              Capital: <span>{countryDetail.capital}</span>
            </p>
          </div>

          <div className={"flex flex-col gap-2 mt-8"}>
            <p>
              Top Level Domain:{" "}
              {countryDetail.topLevelDomain.map(
                (level: string, index: number) => (
                  <>
                    <span key={index}>{level}</span>
                    <span key={index + 1} className={"last:hidden"}>
                      ,{" "}
                    </span>
                  </>
                ),
              )}
            </p>
            <p>
              Currencies:{" "}
              {countryDetail.currencies.map(
                (currency: CurrencyObj, index: number) => (
                  <>
                    <span key={index}>{currency.name}</span>
                    <span key={index + 1} className={"last:hidden"}>
                      ,{" "}
                    </span>
                  </>
                ),
              )}
            </p>
            <p>
              Languages:{" "}
              {countryDetail.languages.map(
                (language: LanguageObj, index: number) => (
                  <>
                    <span key={index}>{language.name}</span>
                    <span key={index + 1} className={"last:hidden"}>
                      ,{" "}
                    </span>
                  </>
                ),
              )}
            </p>
          </div>

          <h1 className={"font-bold mt-8 text-xl"}>Border Countries: </h1>

          <div
            className={"flex flex-row flex-wrap items-center gap-2 pt-4 pb-14"}
          >
            {countryDetail.borders.map((border: string, index: number) => (
              <BorderCountry key={index} country={border} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Country;