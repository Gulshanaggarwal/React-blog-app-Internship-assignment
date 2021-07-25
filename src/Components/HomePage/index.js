import React,{useContext,useState,useEffect} from "react";
import { Redirect } from "react-router-dom";
import Header from "./header";
import { AuthContext } from "../store/authProvider";

function HomePage() {

  const [redirect, setRedirect] = useState(null);

  const user=useContext(AuthContext);

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
    </>
  );
}

export default HomePage;
