import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 
import { db } from "../../firebaseConfig"; // Firestore db import karein
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, googleLogin } = useAuth(); 
  const navigate = useNavigate();

  // Task 2: User data ko Firestore mein save karne ka function [cite: 91, 93]
  const saveUserToFirestore = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    // Agar user pehle se maujood nahi hai, tabhi save karein (No duplicates) 
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        role: "user", // Default role 'user' 
        createdAt: new Date()
      });
    }
  };

  // Task 1: Email & Password Sign In [cite: 86]
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      // User login ke baad Firestore mein save/check karein
      await saveUserToFirestore(result.user);
      navigate('/'); 
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Task 1: Google Sign-In [cite: 87]
  const handleGoogleSignIn = async () => {
    try {
      const result = await googleLogin();
      // Google user ko Firestore mein save/check karein [cite: 92]
      await saveUserToFirestore(result.user);
      navigate('/'); 
    } catch (error) {
      alert("Google Login Failed");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Offer Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        🎉 Free Shipping on Orders Above Rs. 3000 | Code: <strong>ALZA20</strong>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 text-sm px-4">
        <div className="container mx-auto">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link> / 
          <span className="text-gray-800 font-semibold ml-1">Login</span>
        </div>
      </div>

      {/* LOGIN SECTION */}
      <section className="flex flex-col items-center justify-center px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Welcome Back</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" 
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black" />
                <span className="ml-2">Remember me</span>
              </label>
              <Link to="/forgot-password" size="sm" className="text-black hover:underline">Forgot Password?</Link>
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition shadow-md"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition mb-4"
          >
            Continue with Google
          </button>

          <p className="text-center text-gray-700 mt-6">
            Don’t have an account? 
            <Link to="/signup" className="text-black font-semibold hover:underline ml-1">Sign up</Link>
          </p>
        </div>
      </section>
    </div>
  );
}