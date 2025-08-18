import React, { type SetStateAction } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar = ({
  toggleDarkMode,
  setToggleDarkMode,
}: {
  toggleDarkMode: boolean;
  setToggleDarkMode: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <section className={"flex flex-row items-center justify-between bg-blue-900 py-8 px-5"}>
      <h1 className={"font-bold"}>Where in the world?</h1>

      {toggleDarkMode ? (
        <div
          className={"flex flex-row gap-2 items-center"}
          onClick={() => setToggleDarkMode(!toggleDarkMode)}
        >
          <FaMoon />
          <p>Dark Theme</p>
        </div>
      ) : (
        <div
          className={"flex flex-row gap-2 items-center"}
          onClick={() => setToggleDarkMode(!toggleDarkMode)}
        >
          <FaSun />
          <p>Light Theme</p>
        </div>
      )}
    </section>
  );
};

export default Navbar;