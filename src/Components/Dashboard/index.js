import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../store/authProvider";
import BlogTemplate from "./blogtemplate";
import DashboardHeader from "./header";
import Userblog from "./userblogs";
import EditBlog from "./editblogtemplate";


function Dashboard() {
  const user = useContext(AuthContext);   // fetch user
  const [redirect, setRedirect] = useState(null);

  const [isEditing,setEditing]=useState(false);  // set edit mode
  const [currentBlog,setCurrentBlog]=useState(null);  // set current Blog


  // handle Edit function


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
      {isEditing ===false ? <BlogTemplate /> :<EditBlog currentBlog={currentBlog} setEditing={setEditing}/>}
      <Userblog handleEdit={handleEdit} setEditing={setEditing} />
    </div>
  );
}

export default Dashboard;
