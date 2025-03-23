// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNImOzO1U3jn9jmmU5BwM7Q80TQ066tbQ",
  authDomain: "xtinct-79302.firebaseapp.com",
  databaseURL:"https://xtinct-79302-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "xtinct-79302",
  storageBucket: "xtinct-79302.firebasestorage.app",
  messagingSenderId: "1024361414586",
  appId: "1:1024361414586:web:f39e1485f39739dce7e783",
  measurementId: "G-2JD132L74V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database;