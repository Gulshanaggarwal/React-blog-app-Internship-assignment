import { auth } from "../Components/Firebase/config";

function handleSignUp(event,name,email,password){
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then(()=>alert("Regsitered successfully"))
    .catch((err)=>alert(err))

}


function handleLogin(event,email,password){

    event.preventDefault();


    auth.signInWithEmailAndPassword(email,password)
    .then(()=>alert("Signed in Successfully"))
    .catch((err)=>alert(err))
}


function handleLogout(event){
    event.preventDefault();

    auth.signOut()
    .then(()=>alert("Signed out successfully"))
    .catch((err)=>alert("error try again!!"))

}

export {handleSignUp,handleLogin,handleLogout};