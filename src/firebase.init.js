// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyrKwIKynUROSj-r_oBcXgs0ATFYX-oP0",
  authDomain: "picqueue-ee732.firebaseapp.com",
  projectId: "picqueue-ee732",
  storageBucket: "picqueue-ee732.appspot.com",
  messagingSenderId: "1000780888846",
  appId: "1:1000780888846:web:c0e74862cff0b4010e755f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;