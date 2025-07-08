import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

 const firebaseConfig = {
    apiKey: "AIzaSyAXvWLc1hvdqApVRdH6W_Ebn7yib7KOFek",
    authDomain: "my-portfolio-app-43918.firebaseapp.com",
    projectId: "my-portfolio-app-43918",
    storageBucket: "my-portfolio-app-43918.firebasestorage.app",
    messagingSenderId: "913619883024",
    appId: "1:913619883024:web:54cacf04a242b0daaae695",
    measurementId: "G-PZK5X95QP5"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);      
export const storage = getStorage(app); 
