import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { handleLogout } from "../../HelperFunctions/helperFunctions";
import { AuthContext } from "../store/authProvider";
import BlogTemplate from "./blogtemplate";
import DashboardHeader from "./header";
import Userblog from "./userblogs";
import { firestore } from "../Firebase/config";

function Dashboard() {
  const [blogs, setBlogs] = useState(() => {
    const savedData = [];
    firestore
      .collection("blogs")
      .where("userId", "==", "Atul Agarwal")
      .get()
      .then((querysnapshot) =>
        querysnapshot.forEach((doc) => savedData.push(doc.data()))
      )
      .catch((err) => console.log(err));

    if (savedData !== []) {
      return savedData;
    } else {
      return [];
    }
  });

  console.log(blogs);

  const [redirect, setRedirect] = useState(null);

  const user = useContext(AuthContext);
  const { displayName } = user !== null ? user : "";

  function handleCreateNew(event, title, description) {
    event.preventDefault();

    firestore
      .collection("blogs")
      .add({
        userId: displayName,
        id: new Date(),
        title: title,
        description: description,
      })
      .then((res) => alert("sucessfully added"))
      .catch(() => alert("couldn't add"));

    setBlogs([
      ...blogs,
      {
        userId: displayName,
        id: new Date(),
        title: title,
        description: description,
      },
    ]);
  }

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
      <DashboardHeader />
      <BlogTemplate handleCreateNew={handleCreateNew} />
      <Userblog />
    </div>
  );
}

export default Dashboard;
