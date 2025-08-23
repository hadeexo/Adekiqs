import React from "react";
import "../index.css";
import SneakerViewer from "./SneakerViewer";

const Heroo = () => {
  return (
    <section className="flex flex-col sm:flex-row shadow-2xl animate-fade-in">
      <div className="w-full sm:w-1/2 relative flex items-center justify-center py-12 sm:py-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041242] via-[#04042b] to-[#011b6d] z-0" />

        <div className="text-white space-y-6 px-6 sm:px-10 max-w-lg z-10 animate-slide-in-left">
          <div className="flex items-center gap-2">
            <span className="w-8 md:w-11 h-[2px] bg-white"></span>
            <p className="font-medium text-sm md:text-base uppercase tracking-wide">
              Our Bestseller
            </p>
          </div>

          <h1 className="prata-regular text-3xl lg:text-5xl leading-snug sm:py-3">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-4">
            <a
              href="/collection"
              className="bg-white text-[#001457] px-5 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-[#ffffffcc] transition-all duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <SneakerViewer />
    </section>
  );
};

export default Heroo;
