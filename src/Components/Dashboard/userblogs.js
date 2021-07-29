import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { firestore } from "../../Firebase/config";

function Userblog({ handleEdit,setEditing }) {
  const { docs } = useFirestore("blogs");  // custom hook

  // handle date
  
  function handleDate(createdAt){
    const date=new Date(null);
    date.setSeconds(createdAt.seconds);
    return date.toLocaleString();
  }

  // handle delete function
  function handleDelete(event, id) {
    event.preventDefault();
    firestore
      .collection("blogs")
      .doc(id)
      .delete()
      .then(() => alert("Blog deleted successfully"))
      .catch((err) => alert("blog deleting error"));

      setEditing(false);


  }
  return (
    <div className="m-4">
      <h2 className="text-xl border-b-2 border-green-500">
        Find your all blogs here!
      </h2>
      {docs.map((ele, index) => {
        return (
          <div className="my-4 w-2/3 border-2 border-gray-300" key={index}>
            <h3 className="font-bold my-2 p-2">{ele.title}</h3>
            <p className="font-normal my-4 p-2">{ele.description}</p>
            <p className="m-2 bg-gray-300">
              Posted On:{handleDate(ele.createdAt)}
              
            </p>

            <div className="mx-2 my-4">
              <button
                className="px-3 py-1 bg-yellow-500 text-white rounded-sm hover:bg-yellow-600"
                onClick={(event) => handleEdit(event, ele)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white mx-4 rounded-sm hover:bg-red-600"
                onClick={(event) => handleDelete(event,ele.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Userblog;
