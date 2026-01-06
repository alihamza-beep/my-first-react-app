import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const ProtectedRoute = ({ children, roleRequired }) => {
  const { user, role, loading } = useAuth();

  // 1. Loading State (Jab tak Firebase role dhoond raha hai)
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // 2. Auth Check: Agar user login nahi hai toh login page par bhejo
  if (!user) {
    return <Navigate to="/login" />;
  }

  // 3. Admin Check: Flicker rokne aur form dikhane ke liye
  if (roleRequired) {
    // Agar role abhi tak null hai (fetch ho raha hai), toh intezar karein
    if (role === null) {
      return <div className="text-center p-5">Verifying Admin Access...</div>;
    }

    // Agar role mil gaya magar wo 'admin' nahi hai
    if (role !== roleRequired) {
      console.warn("Access Denied. Role found:", role);
      return <Navigate to="/" />;
    }
  }

  // 4. Sab sahi hai toh form nazar aayega
  return children;
};