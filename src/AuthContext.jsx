import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, googleProvider } from './firebaseConfig';
import { 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  deleteUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Task 2: Store User Data in Firestore without duplicates [cite: 91, 94]
  const saveUserToFirestore = async (loggedUser) => {
    const userRef = doc(db, "users", loggedUser.uid);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      const userData = {
        uid: loggedUser.uid,
        email: loggedUser.email,
        role: "user", // Default role assigned [cite: 102]
        createdAt: new Date()
      };
      await setDoc(userRef, userData);
      setRole("user");
    } else {
      // Agar user pehle se hai toh sirf uska role state mein set karein [cite: 109]
      setRole(userSnap.data().role);
    }
  };

  // Task 1: Email & Password Sign Up [cite: 85]
  const signup = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await saveUserToFirestore(res.user);
    return res;
  };

  // Task 1: Email & Password Sign In [cite: 86]
  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    // Role fetch logic included in onAuthStateChanged for stability
    return res;
  };
  
  // Task 1: Google Sign-In [cite: 87]
  const googleLogin = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    await saveUserToFirestore(res.user);
    return res;
  };

  // Task 1: Sign Out [cite: 88]
  const logout = () => {
    setRole(null);
    return signOut(auth);
  };

  // Task 1: Reset Password 
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Task 1: Delete Account 
  const removeAccount = async () => {
    if (auth.currentUser) {
      await deleteUser(auth.currentUser);
      setRole(null);
      setUser(null);
    }
  };

  // Role-Based Access Control logic in Observer [cite: 96, 109]
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setRole(userDoc.data().role);
          } else {
            setRole("user");
          }
        } catch (error) {
          console.error("Role fetching error:", error);
          setRole("user");
        }
      } else {
        setRole(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      role, 
      loading, 
      signup, 
      login, 
      googleLogin, 
      logout, 
      resetPassword, 
      removeAccount 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);