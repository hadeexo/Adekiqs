import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Log in ");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill out all required fields.");
      return;
    }

    setError("");
    if (currentState === "Log in") {
      console.log("Logging in with", email, password);
    } else {
      console.log("Signing up with", name, email, password);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt_14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Log in" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            {" "}
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Log in")}
            className="cursor-pointer"
          >
            Log in Here
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer"
      >
        {currentState === "Log in" ? "Sign in" : "Sign up"}
      </button>
    </form>
  );
};

export default Login;
