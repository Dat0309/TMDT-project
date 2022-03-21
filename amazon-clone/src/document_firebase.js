// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjw8TjNKnl5fabLrBAkSnbDh9Hf8XQtwg",
  authDomain: "tmdt-7a34a.firebaseapp.com",
  projectId: "tmdt-7a34a",
  storageBucket: "tmdt-7a34a.appspot.com",
  messagingSenderId: "793900877188",
  appId: "1:793900877188:web:43e3f43f461c427e8709d1",
  measurementId: "G-WEDYYQSPPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);