// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBscOGF1T_j_vyTijALTmcRA7vhuoST7Gw",
  authDomain: "financefusion-57c13.firebaseapp.com",
  projectId: "financefusion-57c13",
  storageBucket: "financefusion-57c13.appspot.com",
  messagingSenderId: "172630713493",
  appId: "1:172630713493:web:e0a8dfa763d44be40ae79c",
  measurementId: "G-EJ32NGG4F0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc};