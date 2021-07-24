import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAB3pkXHb7Z43i-U0qOCuUn3USSt3pb6Cg",
  authDomain: "my-gallery-c8bff.firebaseapp.com",
  projectId: "my-gallery-c8bff",
  storageBucket: "my-gallery-c8bff.appspot.com",
  messagingSenderId: "742563386541",
  appId: "1:742563386541:web:e2e21790b2a23a036c6224",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const auth = firebase.auth();

export {auth,projectFirestore};
