import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore SDK import kiya (agar database use karna hai)

// Firebase Console se mila hua configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDMj2icHJ7sJsNVaxWV39HPUfmaZUfRb9Y", // Aapki asli key
  authDomain: "react-spa-lab.firebaseapp.com",
  projectId: "react-spa-lab",
  storageBucket: "react-spa-lab.firebasestorage.app",
  messagingSenderId: "1009008180226",
  appId: "1:1009008180226:web:c62b83bb2b97e864c13b1b"
};

// Firebase app ko initialize (shuru) karen
export const app = initializeApp(firebaseConfig);

// Firestore database service ko initialize karen aur export karen
export const db = getFirestore(app);