import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      setTimeout(() => setVisible(false), 300);
    }
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowSearch(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return showSearch && visible ? (
    <div
      className={`top-100 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-gray-50 backdrop-blur-md shadow-md border-t border-b text-center ${
        animate ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <img
          className="w-4 cursor-pointer"
          src={assets.search_icon}
          alt="Search"
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-4 cursor-pointer hover:opacity-70"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
