import React from "react";
import { assets } from "../assets/assets";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4 sm:px-0">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel
            vero harum quod cum similique error modi, autem labore nulla non
            enim consequuntur hic adipisci laudantium tempore dignissimos sequi
            dolorum?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="/" className="hover:text-black transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-black transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/delivery"
                className="hover:text-black transition duration-200"
              >
                Delivery
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-black transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-600" />
              <span>+234-70-6588-7037</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-600" />
              <span>adekunletayo824@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-600">
          Copyright 2025 adekiqs.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
