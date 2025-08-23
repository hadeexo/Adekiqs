import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, cartItems, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItems[productId][size],
            orderDate: new Date().toISOString(), // Example order date
            status: "pending", // Set default or dynamic status
          });
        }
      }
    }
    setOrderData(tempData);
  }, [cartItems]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const getEstimatedDeliveryDate = (orderDate) => {
    if (!orderDate) return "N/A";
    const date = new Date(orderDate);
    date.setDate(date.getDate() + 7);
    return formatDate(date.toISOString());
  };

  const getOrderStatus = (status) => {
    switch (status) {
      case "pending":
        return { text: "Processing", color: "bg-yellow-500" };
      case "shipped":
        return { text: "Shipped", color: "bg-blue-500" };
      case "delivered":
        return { text: "Delivered", color: "bg-green-600" };
      case "cancelled":
        return { text: "Cancelled", color: "bg-red-500" };
      default:
        return { text: "Unknown", color: "bg-gray-400" };
    }
  };

  const handleTrackOrder = (id) => {
    console.log("Tracking order:", id);
  };

  return (
    <div className="border-t pt-16 px-4 sm:px-8">
      <div className="text-2xl mb-6">
        <Title text1="MY" text2=" ORDERS" />
      </div>

      {orderData.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">You have no orders yet.</p>
      ) : (
        orderData.map((item, index) => {
          const product = products.find((p) => p._id === item._id);
          if (!product) return null;

          const status = getOrderStatus(item.status);

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 sm:w-20 rounded-md object-cover"
                  src={product.image?.[0]}
                  alt={product.name}
                />
                <div>
                  <p className="sm:text-base font-medium">{product.name}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-base text-gray-700">
                    <p className="text-lg">
                      {currency}
                      {product.price}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-2">
                    Order Date:{" "}
                    <span className="text-gray-400">
                      {formatDate(item.orderDate)}
                    </span>
                  </p>
                  <p className="mt-1">
                    Estimated Delivery:{" "}
                    <span className="text-gray-400">
                      {getEstimatedDeliveryDate(item.orderDate)}
                    </span>
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-between md:justify-end gap-4 items-center">
                <div className="flex items-center gap-2">
                  <span className={`min-w-2 h-2 rounded-full ${status.color}`} />
                  <p className="text-sm md:text-base">{status.text}</p>
                </div>

                <button
                  onClick={() => handleTrackOrder(item._id)}
                  className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100 transition"
                >
                  Track Order
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;
