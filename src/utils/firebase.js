// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVU6KgAk6A1hC1vF2vQftgWaWQKwP-7V0",
  authDomain: "netflixgpt-331fa.firebaseapp.com",
  projectId: "netflixgpt-331fa",
  storageBucket: "netflixgpt-331fa.firebasestorage.app",
  messagingSenderId: "548246532221",
  appId: "1:548246532221:web:f7613c37f69e80be440114",
  measurementId: "G-Q4HQSGTJEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
