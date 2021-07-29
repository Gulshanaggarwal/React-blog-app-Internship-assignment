import React, {createContext, useState } from "react";
import { auth } from "../Firebase/config";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;