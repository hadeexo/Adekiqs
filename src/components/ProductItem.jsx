import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  const formattedPrice = `${price.toFixed(2)}`
  return (
    <Link
      className="text-gray-700 cursor-pointer hover:shadow-lg"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden ">
        <img
          className="hover:scale-110 shadow-lg transition ease-in-out"
          src={image && image[0] ? image[0] : "/path/to/default-image.jpg"}
          alt={`Image of ${name}`}
        />
      </div>
      <p className="pt-3 pb-1 text-sm" title={name}>
        {name}
      </p>
      <p className="text-sm font-medium">
        {currency}
        {formattedPrice}
      </p>
    </Link>
  );
};

export default ProductItem;
