import React, { useState } from "react";
import { firestore } from "../../Firebase/config";

function EditBlog({ currentBlog,setEditing }) {
  const [title, setTitle] = useState(currentBlog.title);
  const [description, setDescription] = useState(currentBlog.description);

  // handle update

  function handleUpdate(event, id) {
    event.preventDefault();

    // firestore data update
    firestore
      .collection("blogs")
      .doc(id)
      .update({
        title:title,
        description:description
      })
      .then(() => alert("update success"))
      .catch((err) => alert("update error"));

      setEditing(false);
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
        <div className="my-4">
          <button
            className="px-3 py-1 bg-indigo-500 text-white rounded-sm hover:bg-indigo-600"
            onClick={(event) => handleUpdate(event, currentBlog.id)}
          >
            Update
          </button>
          <button className="px-3 py-1 bg-gray-500 text-white mx-4 rounded-sm hover:bg-gray-600" onClick={()=>setEditing(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBlog;
