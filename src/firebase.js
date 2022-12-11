// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8HV0x5CZ53q1mzZYrsZeRLbAj5tpNZVU",
  authDomain: "restaurante-12ee9.firebaseapp.com",
  projectId: "restaurante-12ee9",
  storageBucket: "restaurante-12ee9.appspot.com",
  messagingSenderId: "861888774694",
  appId: "1:861888774694:web:552e9d58a2099649b35ce7",
  measurementId: "G-4Y3TCEP436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore = getFirestore(app);
const analytics = getAnalytics(app);
export {
    FirebaseFirestore,
}