import React, { useState } from "react";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setStatusMessage("Thank you for subscribing! You'll receive 20% off.");
      setEmail("");
    } else {
      setStatusMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none py-2 px-4"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="bg-black text-white text-xs px-10 py-4 cursor-pointer hover:bg-gray-800 transition duration-200"
          type="submit"
        >
          Subscribe
        </button>
      </form>

      {statusMessage && (
        <p
          className={`text-sm mt-3 ${
            statusMessage.includes("valid") ? "text-green-500" : "text-red-500"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default NewsletterBox;
