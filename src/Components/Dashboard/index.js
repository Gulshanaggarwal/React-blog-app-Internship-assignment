import React, { useContext, useState,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { handleLogout } from "../../HelperFunctions/helperFunctions";
import { AuthContext } from "../store/authProvider";

function Dashboard() {

  const [redirect,setRedirect]=useState(null);

  const user=useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setRedirect("/dashboard");
    }
  }, [user]);

  if (user) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <button type="submit" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;