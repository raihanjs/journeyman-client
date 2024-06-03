// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrsMSa0lsqxWS2-qG2V1EBzjZuziJF2kQ",
  authDomain: "journeyman-client.firebaseapp.com",
  projectId: "journeyman-client",
  storageBucket: "journeyman-client.appspot.com",
  messagingSenderId: "823367109086",
  appId: "1:823367109086:web:df2dcfd0c40a79c0f7354f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
