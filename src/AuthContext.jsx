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

  const saveUserToFirestore = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      const userData = {
        uid: user.uid,
        email: user.email,
        role: "user",
        createdAt: new Date()
      };
      await setDoc(userRef, userData);
      setRole("user");
    } else {
      setRole(userSnap.data().role);
    }
  };

  const signup = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await saveUserToFirestore(res.user);
    return res;
  };

  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, "users", res.user.uid));
    if (userDoc.exists()) {
      setRole(userDoc.data().role);
    }
    return res;
  };
  
  const googleLogin = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    await saveUserToFirestore(res.user);
    return res;
  };

  const logout = () => {
    setRole(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true); // Har baar state change par loading shuru
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
      setLoading(false); // Role fetch hone ke BAAD loading false
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading, signup, login, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);