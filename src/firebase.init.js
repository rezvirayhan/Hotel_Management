// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbWXQ1M0Uif0AbB24nvSr6vRZ9qUUA-Ug",
  authDomain: "hotel-management-faaaa.firebaseapp.com",
  projectId: "hotel-management-faaaa",
  storageBucket: "hotel-management-faaaa.appspot.com",
  messagingSenderId: "632660928084",
  appId: "1:632660928084:web:474afe9d268b0cb522afc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;