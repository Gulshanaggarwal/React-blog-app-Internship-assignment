import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "./header";
import { AuthContext } from "../../store/authProvider";
import AllUsersBlog from "./allUsersBlog";

function HomePage() {
  const [redirect, setRedirect] = useState(null);

  const user = useContext(AuthContext); // fetch user

  // routing logic

  useEffect(() => {
    if (user) {
      setRedirect("/dashboard");
    }
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  
  return (
    <>
      <Header />
      <AllUsersBlog />
    </>
  );
}

export default HomePage;
