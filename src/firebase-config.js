// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.React_App_Firebase_Api,
  authDomain: "fir-crud-app-a2864.firebaseapp.com",
  projectId: "fir-crud-app-a2864",
  storageBucket: "fir-crud-app-a2864.appspot.com",
  messagingSenderId: "575449823653",
  appId: "1:575449823653:web:70746d6e5ebea2374fd04c",
  measurementId: "G-HWFSMPCNPS",
};

// creating instance of object
const app = initializeApp(firebaseConfig);

// creating firestore database connection
export const db = getFirestore(app);
