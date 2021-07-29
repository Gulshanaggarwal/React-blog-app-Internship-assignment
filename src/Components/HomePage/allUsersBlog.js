import React, { useState } from "react";
import { firestore } from "../../Firebase/config";

function AllUsersBlog() {
  const [blogs, setBlogs] = useState([]); // blog state

  // handle date function

  function handleDate(createdAt) {
    const date = new Date(null);
    date.setSeconds(createdAt.seconds);
    return date.toLocaleString();
  }

  // fetch realtime updates from firebase

  firestore
    .collection("blogs")
    .orderBy("createdAt", "desc")
    .onSnapshot((querySnapShot) => {
      const documents = [];
      querySnapShot.forEach((doc) =>
        documents.push({ ...doc.data(), id: doc.id })
      );
      setBlogs(documents);
    });

  return (
    <div className="bg-gray-200">
      <div className="p-2">
        <h1 className="font-extrabold text-3xl my-8">
          Read the Latest blog from our Writers only on{" "}
          <span className="bg-gray-300 text-enter font-bold text-xl rounded-sm px-3 py-2">
            DevOnly
          </span>
        </h1>
        {blogs.map((ele) => {
          return (
            <div key={ele.id} className="border-2 border-gray-300 my-4">
              <p className="bg-gray-300">
                Posted On: {handleDate(ele.createdAt)}
              </p>
              <h3 className="font-bold text-2xl m-2">{ele.title}</h3>
              <p className="m-2">{ele.description}</p>
              <p className="m-2">
                <span className="text-blue-500">Written By:</span>{" "}
                {ele.userName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllUsersBlog;
