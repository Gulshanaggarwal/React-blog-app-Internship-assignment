import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { handleLogout } from "../../HelperFunctions/helperFunctions";
import { AuthContext } from "../store/authProvider";
import BlogTemplate from "./blogtemplate";
import DashboardHeader from "./header";
import Userblog from "./userblogs";
import { firestore } from "../Firebase/config";
import EditBlog from "./editblogtemplate";


function Dashboard() {
  const user = useContext(AuthContext);
  const [redirect, setRedirect] = useState(null);

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [blog,setBlog]=useState([]);
  const [isEditing,setEditing]=useState(false);
  const [currentBlog,setCurrentBlog]=useState(null);


  function handleEdit(event,ele){
    event.preventDefault();
    setEditing(true);
    setCurrentBlog(ele);

  }



  // routing logic
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
      {isEditing ===false ? <BlogTemplate title={title} description={description} setTitle={setTitle} setDescription={setDescription} setBlog={setBlog}/> :<EditBlog currentBlog={currentBlog} setEditing={setEditing}/>}
      <Userblog handleEdit={handleEdit} setEditing={setEditing} />
    </div>
  );
}

export default Dashboard;
