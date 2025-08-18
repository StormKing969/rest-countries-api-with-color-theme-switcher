import React, {
  type ChangeEvent,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import { FaSearch } from "react-icons/fa";
import { debounce } from "~/lib/utils";

const SearchBar = ({
  setSearchTerm,
  searchTerm,
}: {
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  searchTerm: string;
}) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const debounced = debounce(() => {
      setSearchTerm(inputValue);
    }, 500);

    debounced();

    return () => {
      debounced.cancel?.();
    };
  }, [inputValue, setSearchTerm]);

  return (
    <div
      className={
        "flex flex-row gap-5 px-5 py-3 rounded-[4px] items-center bg-blue-900"
      }
    >
      <FaSearch />
      <input
        type="text"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={handleChange}
        className="w-full appearance-none"
      />
    </div>
  );
};

export default SearchBar;