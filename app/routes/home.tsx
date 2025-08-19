import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { useState } from "react";
import CountryList from "~/components/CountryList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Country List" },
    { name: "description", content: "A list of countries with their general information" },
  ];
}

export default function Home() {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(true);

  return (
    <main
      className={`${toggleDarkMode ? "dark-mode" : "normal-mode"} max-w-[1440px] min-w-[340px] w-full`}
    >
      <Navbar
        toggleDarkMode={toggleDarkMode}
        setToggleDarkMode={setToggleDarkMode}
      />

      <CountryList toggleDarkMode={toggleDarkMode} />
    </main>
  );
}