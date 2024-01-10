// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfJWtN8x21CEGEWbmDPmlVa6p2vnt0U7o",
  authDomain: "netflixgpt-fd1b5.firebaseapp.com",
  projectId: "netflixgpt-fd1b5",
  storageBucket: "netflixgpt-fd1b5.appspot.com",
  messagingSenderId: "542404039784",
  appId: "1:542404039784:web:6739b537f9423883ad97dd",
  measurementId: "G-FHLNVWDDJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();