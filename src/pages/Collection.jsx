import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";



const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("default");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        (item.name || "").toLowerCase().includes((search || "").toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    switch (sortType) {
      case "low-high":
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, sortType]);

  return (
 
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
          </p>
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            {(category.length > 0 || subCategory.length > 0) && (
              <div className="text-sm mb-4 text-gray-600">
                <p>Active Filters:</p>
                {category.length > 0 && <p>Category: {category.join(", ")}</p>}
                {subCategory.length > 0 && (
                  <p>Type: {subCategory.join(", ")}</p>
                )}
              </div>
            )}
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Men"
                  checked={category.includes("Men")}
                  onChange={toggleCategory}
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Women"
                  checked={category.includes("Women")}
                  onChange={toggleCategory}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Kids"
                  checked={category.includes("Kids")}
                  onChange={toggleCategory}
                />
                Kids
              </p>
              <p
                className="text-sm font-medium text-black hover:underline cursor-pointer"
                onClick={() => {
                  setCategory([]);
                  setSubCategory([]);
                }}
              >
                Clear Filters
              </p>
            </div>
          </div>

          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">BRAND</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Jordan"
                  checked={subCategory.includes("Jordan")}
                  onChange={toggleSubCategory}
                />
                Jordan
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Nike"
                  checked={subCategory.includes("Nike")}
                  onChange={toggleSubCategory}
                />
                Nike
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Random"}
                  checked={subCategory.includes("Random")}
                  onChange={toggleSubCategory}
                />
                Random
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={" COLLECTIONS"} />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="default">Sort by: Default</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default Collection;
