// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFokPViEuiI5dvFS_bxuWJRx551GW3bmo",
  authDomain: "faringeyt-press.firebaseapp.com",
  projectId: "faringeyt-press",
  storageBucket: "faringeyt-press.firebasestorage.app",
  messagingSenderId: "1033446509476",
  appId: "1:1033446509476:web:be7b47a20aa8c6bba54f31",
  measurementId: "G-7M7PYSJ1CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);