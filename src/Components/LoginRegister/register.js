import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { handleSignUp } from "../../HelperFunctions/helperFunctions";
import { AuthContext } from "../../store/authProvider";

function Register() {
  const [name, setName] = useState(""); // setName
  const [email, setEmail] = useState(""); // set User email
  const [password, setPassword] = useState(""); // setuser password
  const [redirect, setRedirect] = useState(null);

  const user = useContext(AuthContext); // access user state using context;


  // routing logic

  useEffect(() => {
    if (user) {
      setRedirect("/dashboard");
    }
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="w-1/3">
        <h1 className="text-xl my-2">Welcome to Sign up Page</h1>
        <form className="flex flex-col">
          <input
            className="p-2 my-2 bg-gray-200  border-2 outline-none focus:border-blue-500 border-2"
            type="text"
            value={name}
            placeholder="Your Name"
            autoFocus
            required
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="p-2 my-2 bg-gray-200  border-2 outline-none focus:border-blue-500 border-2"
            type="email"
            value={email}
            placeholder="Your Email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="p-2 bg-gray-200 focus:border-blue-500 border-2 outline-none"
            type="password"
            value={password}
            placeholder="Set Password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="p-2 bg-blue-500 my-2 text-white hover:bg-blue-600"
            type="submit"
            onClick={(event) => handleSignUp(event, name, email, password)}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
