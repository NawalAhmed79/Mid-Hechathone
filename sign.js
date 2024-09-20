const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});






 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDR2TMHa6kXaxgp22zt5dRajsomIX76tXo",
   authDomain: "nawal-df591.firebaseapp.com",
   projectId: "nawal-df591",
   storageBucket: "nawal-df591.appspot.com",
   messagingSenderId: "530372473705",
   appId: "1:530372473705:web:48b1fb2d1475b528cec3f8"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig); 

 const auth = getAuth();

 let register_btn = document.getElementById("register_btn");

 register_btn.addEventListener("click",function(){
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    console.log("user",user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("error",errorMessage)
    // ..
  });

 })


 let signIn_btn = document.getElementById("signIn_btn");

 signIn_btn.addEventListener("click",function(){

    let loginEmail = document.getElementById("loginEmail")
    let loginPassword = document.getElementById("loginPassword")

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user",user)

    window.location.replace("main.html")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error",errorMessage)
  });
 })











