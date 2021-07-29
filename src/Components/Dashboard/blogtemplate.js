import React, { useContext, useState } from "react";
import { firestore,timestamp } from "../Firebase/config";
import { AuthContext } from "../store/authProvider";

function BlogTemplate({title,description, setTitle, setDescription ,setBlog}) {

  const user=useContext(AuthContext);
  const {displayName}=user!==null ?user:"";

  function handleCreateBlog(event){
    event.preventDefault();
    const data={
      createdAt:new Date(),
      userName:displayName,
      title,
      description

    }
    firestore.collection('blogs').add(data)
    .then(()=>alert("added successfully"))
    .catch((err)=>alert("couldn't store"))

    setBlog(data);



  }
  return (
    <div>
      <form className="flex flex-col m-4 w-2/3">
        <input
          type="text"
          placeholder="Title"
          className="my-2 p-2 focus:border-black border-2"
          autoFocus
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          rows="5"
          className="focus:border-black border-2 resize-none p-2"
          placeholder="Blog description"
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        >
          Blog Description
        </textarea>
        <button
          type="submit"
          className="my-2 bg-green-400 w-28 py-2 rounded-sm hover:bg-green-600"
          onClick={handleCreateBlog}
        >
          Create a New{" "}
        </button>
      </form>
    </div>
  );
}

export default BlogTemplate;
