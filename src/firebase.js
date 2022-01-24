import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB8acmiORqB3jcLLZzhEXfp7p_aLoNPwJk",
    authDomain: "project-e1738.firebaseapp.com",
    projectId: "project-e1738",
    storageBucket: "project-e1738.appspot.com",
    messagingSenderId: "995225858547",
    appId: "1:995225858547:web:dc9ba6698bb005e18fe286"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };