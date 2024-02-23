// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCug5bibumevWrLANMbvNfPwBaIoKe1Qg0",
  authDomain: "react-practice-olx.firebaseapp.com",
  projectId: "react-practice-olx",
  storageBucket: "react-practice-olx.appspot.com",
  messagingSenderId: "44054448515",
  appId: "1:44054448515:web:7cb307568671e4bcdd4eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;