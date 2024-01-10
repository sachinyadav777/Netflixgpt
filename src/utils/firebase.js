// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDKD4TkPltzCSr7W1gwKb3n_SZQ_NiM70",
  authDomain: "netflixgpt-5d175.firebaseapp.com",
  projectId: "netflixgpt-5d175",
  storageBucket: "netflixgpt-5d175.appspot.com",
  messagingSenderId: "857281110733",
  appId: "1:857281110733:web:41967b95917719ca493f84",
  measurementId: "G-GPMC63ZW5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();