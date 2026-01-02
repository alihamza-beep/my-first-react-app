import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Yeh line lazmi add karni hai

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

// Initialize Firestore aur isay export karein taake pages mein use ho sakay
export const db = getFirestore(app);