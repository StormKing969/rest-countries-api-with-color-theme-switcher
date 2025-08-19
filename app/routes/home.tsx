import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { useState } from "react";
import CountryList from "~/components/CountryList";
import {useLocation} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Country List" },
    { name: "description", content: "A list of countries with their general information" },
  ];
}

export default function Home() {
    const location = useLocation();
    const bgState = location.state?.toggleDarkMode;
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(bgState);

  return (
    <main
      className={`${toggleDarkMode ? "dark-mode" : "normal-mode"} min-w-[340px] lg:my-auto w-full`}
    >
      <Navbar
        toggleDarkMode={toggleDarkMode}
        setToggleDarkMode={setToggleDarkMode}
      />

      <CountryList toggleDarkMode={toggleDarkMode} />
    </main>
  );
}