import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <nav className="flex items-center justify-between py-5 font-medium shadow-lg animate-fade-in relative">
      {/* Logo */}
      <Link to="/" className="flex justify-center items-center gap-2">
        <img src={assets.logo} alt="Logo" className="w-16" />
        <h2 className="text-2xl font-semibold">Adekiqs</h2>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        {[
          { name: "HOME", to: "/" },
          { name: "COLLECTION", to: "/collection" },
          { name: "ABOUT", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-black font-semibold" : "hover:text-black"
              }`
            }
          >
            <p>{link.name}</p>
            <hr
              className={({ isActive }) =>
                `w-2/4 h-[1.5px] bg-gray-700 ${
                  isActive ? "block" : "hidden"
                }`
              }
            />
          </NavLink>
        ))}
      </ul>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <button
          onClick={() => setShowSearch(true)}
          aria-label="Search"
          className="cursor-pointer"
        >
          <img src={assets.search_icon} className="w-5" alt="Search" />
        </button>

        {/* Profile Dropdown */}
        <div className="group relative">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="Profile"
              aria-label="User Profile"
            />
          </Link>
          <div className="absolute right-0 pt-4 hidden group-hover:block transition ease-in-out duration-200 transform">
            <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-600 rounded-xl shadow-lg">
              <Link
                to="/profile"
                className="cursor-pointer hover:text-black transition"
              >
                My Profile
              </Link>
              <Link
                to="/orders"
                className="cursor-pointer hover:text-black transition"
              >
                Orders
              </Link>
              <button className="text-left cursor-pointer hover:text-black transition">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5"
            alt="Cart"
            aria-label="Shopping Cart"
          />
          <span className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
            {getCartCount()}
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setVisible(!visible)}
          aria-label="Menu Toggle"
          aria-controls="mobile-menu"
          aria-expanded={visible ? "true" : "false"}
          className="sm:hidden"
        >
          <img
            src={visible ? assets.close_icon : assets.menu_icon}
            className="w-6"
            alt="Menu Toggle"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          visible ? "translate-x-0 w-3/4" : "translate-x-full w-0"
        }`}
      >
        <div className="flex flex-col text-gray-700 text-left gap-6 py-6">
          {/* Back Button */}
          <button
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100 transition"
          >
            <img src={assets.dropdown_icon} alt="Back" className="w-4" />
            <p>Back</p>
          </button>

          {/* Nav Links */}
          {[
            { name: "HOME", to: "/" },
            { name: "COLLECTION", to: "/collection" },
            { name: "ABOUT", to: "/about" },
            { name: "CONTACT", to: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b hover:bg-gray-50 transition"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
