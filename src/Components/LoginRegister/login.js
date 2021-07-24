import React, { useState } from "react";
import { handleLogin } from "../../HelperFunctions/helperFunctions";

function Login() {
  const [email, setEmail] = useState(""); //  user email
  const [password, setPassword] = useState(""); // user password

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="w-1/3">
        <h1 className="text-xl my-2">Welcome to Login Page</h1>
        <form className="flex flex-col">
          <input
            className="p-2 my-2 bg-gray-200  border-2 outline-none focus:border-blue-500 border-2"
            type="email"
            value={email}
            placeholder="Your Registered Email"
            autoFocus
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="p-2 bg-gray-200 focus:border-blue-500 border-2 outline-none"
            type="text"
            value={password}
            placeholder="Password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="p-2 bg-blue-500 my-2 text-white hover:bg-blue-600"
            type="submit"
            onClick={(event)=>handleLogin(event,email,password)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
