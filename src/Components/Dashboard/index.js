import React, { useContext, useState,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { handleLogout } from "../../HelperFunctions/helperFunctions";
import { AuthContext } from "../store/authProvider";
import BlogTemplate from "./blogtemplate";
import DashboardHeader from "./header";
import Userblog from "./userblogs";

function Dashboard() {

  const [redirect,setRedirect]=useState(null);

  const user=useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      setRedirect("/");
    }
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <DashboardHeader/>
      <BlogTemplate/>
      <Userblog/>
    </div>
  );
}

export default Dashboard;