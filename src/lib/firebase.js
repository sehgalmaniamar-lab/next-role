// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyh9ywGcZv0wID6UQZcbVLwmKYLzYE1fY",
  authDomain: "next-role-cab3c.firebaseapp.com",
  projectId: "next-role-cab3c",
  storageBucket: "next-role-cab3c.firebasestorage.app",
  messagingSenderId: "183029981713",
  appId: "1:183029981713:web:2310f130af2acd0d0547b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);