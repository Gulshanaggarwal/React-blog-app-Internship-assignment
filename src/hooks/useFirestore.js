import { useState, useEffect, useContext } from "react";
import { firestore } from "../Firebase/config";
import { AuthContext } from "../store/authProvider";

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);
  const user = useContext(AuthContext);
  const { displayName } = user !== null ? user : "";

  useEffect(() => {
    const unsub = firestore
      .collection(collection)
      .where("userName", "==", `${displayName}`)
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
}
export default useFirestore;
