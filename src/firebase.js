// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtIP28MAY5hrfCy8NM0PcPSZ6rdxMSyEg",
  authDomain: "realtor-clone-react-e7ca3.firebaseapp.com",
  projectId: "realtor-clone-react-e7ca3",
  storageBucket: "realtor-clone-react-e7ca3.appspot.com",
  messagingSenderId: "527427617707",
  appId: "1:527427617707:web:f7b14919cf1969fd6688ee",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
