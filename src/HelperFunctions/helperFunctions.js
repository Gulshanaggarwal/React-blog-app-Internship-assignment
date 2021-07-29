import { auth } from "../Firebase/config";

function updateProfile(name){
    const user=auth.currentUser;

    user.updateProfile({
        displayName:name
    })
}


function handleSignUp(event,name,email,password){
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then(()=>{
        alert("Regsitered successfully");

        // update profile function call
        updateProfile(name);
        
    })
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