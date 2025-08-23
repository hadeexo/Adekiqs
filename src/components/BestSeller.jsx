import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-16 px-4 md:px-10">
      <div className="text-center mb-8 text-3xl">
        <Title text1={"BEST"} text2={" SELLERS"} />
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
          Discover our top-rated products chosen by customers like you.
        </p>
      </div>

      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        <div className="flex gap-6">
          {bestSeller.length === 0 ? (
            <div className="text-center text-lg text-gray-500 w-full">
              Loading best sellers...
            </div>
          ) : (
            bestSeller.map((item) => (
              <div
                key={item._id}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 p-4 w-64"
              >
                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />

                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Best Seller
                </div>

                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 ${
                        i < item.rating ? "text-yellow-400" : "text-yellow-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </Marquee>
    </div>
  );
};

export default BestSeller;
