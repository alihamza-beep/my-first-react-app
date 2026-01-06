import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Task 1 ke liye zaroori

const firebaseConfig = {
  apiKey: "AIzaSyD-jD_X2i-jzL8cff2hlpPjS4MlGAeK_y4",
  authDomain: "my-react-crud-app-59bb8.firebaseapp.com",
  projectId: "my-react-crud-app-59bb8",
  storageBucket: "my-react-crud-app-59bb8.firebasestorage.app",
  messagingSenderId: "521369838754",
  appId: "1:521369838754:web:48e1ced1a76e04953ba3fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 1. Initialize Firestore (Database operations ke liye)
export const db = getFirestore(app); 

// 2. Initialize Auth (Email/Password, Reset Password aur Account Delete ke liye)
export const auth = getAuth(app); 

// 3. Initialize Google Provider (Google Sign-In functionality ke liye)
export const googleProvider = new GoogleAuthProvider();