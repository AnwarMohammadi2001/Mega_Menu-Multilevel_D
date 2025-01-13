import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleCancelClick = () => {
    setIsExpanded(false);
    setSearchValue("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setRecentSearches([searchValue, ...recentSearches]);
      setSearchValue("");
    }
  };

  return (
    <div className="relative  w-full bg-white max-w-lg  mx-auto">
      {/* Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className={`flex items-center gap-2 bg-white border ${
          isExpanded ? "border-blue-500 shadow-lg w-full mt-2" : "border-gray-300"
        } rounded-full px-4 py-2 transition-all duration-300 ${
          isExpanded ? "fixed top-4 left-1/2 transform -translate-x-1/2" : ""
        }`}
        onClick={handleSearchClick}
      >
        <FiSearch size={20} className="text-gray-500" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className="flex-grow bg-transparent outline-none text-gray-700"
        />
      </form>

      {/* Search List & Cancel Button */}
      {isExpanded && (
        <div className="fixed top-full left-0 h-[500px] right-0 bg-white border-t border-gray-200 shadow-lg rounded-lg">
          {/* Recently Searched */}
          <h4 className="text-gray-500 text-sm p-4">Recently Searched</h4>
          {recentSearches.length > 0 ? (
            <ul className="mb-4 px-4">
              {recentSearches.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 py-1 hover:text-blue-500 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-sm mb-4 px-4">No recent searches</p>
          )}

          {/* Cancel Button */}
          <button
            onClick={handleCancelClick}
            className="w-full py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
