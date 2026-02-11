import { Routes, Route } from "react-router-dom";
import React from 'react';

// Context aur Protected Route import [cite: 96]
import { ProtectedRoute } from "./ProtectedRoute"; 

// Layouts imports [cite: 23]
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";

// Pages imports [cite: 15]
import CreateItem from "./components/pages/CreateItem.jsx";
import ViewAllItems from "./components/pages/ViewAllItems.jsx";
import ItemDetail from "./components/pages/ViewSingleItem.jsx";
import HomePage from "./components/pages/Home.jsx";
import AboutPage from "./components/pages/About.jsx";
import ContactPage from "./components/pages/Contact.jsx";
import PageNotFound from "./components/pages/PagesNotFound.jsx";
import Login from "./components/pages/Login.jsx"; 
import SignUp from "./components/pages/Signup.jsx";
import EditItem from "./components/pages/EditItem.jsx";

// Dashboards (Task 3: Admin & User Dashboards) 
const AdminDashboard = () => (
  <div className="container py-10 text-center">
    <h2 className="display-5 font-bold">Admin Dashboard</h2>
    <p className="lead">Manage all products and users from here. [cite: 107]</p>
  </div>
);

const UserDashboard = () => (
  <div className="container py-10 text-center">
    <h2 className="display-5 font-bold">User Dashboard</h2>
    <p className="lead">View your profile and managed items. [cite: 108]</p>
  </div>
);

function App() {
  return (
    <>
      {/* Navbar consistent layout across all routes [cite: 23] */}
      <Navbar />

      <Routes>
        {/* --- Public Routes: Sab ke liye khulay hain [cite: 16] --- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* --- Protected Routes: Sirf login shuda users ke liye [cite: 102] --- */}
        
        {/* View All Items [cite: 19, 30] */}
        <Route path="/view-all-items" element={
          <ProtectedRoute>
            <ViewAllItems />
          </ProtectedRoute>
        } />
        
        {/* Dynamic Route: View Single Item  */}
        <Route path="/item/:id" element={
          <ProtectedRoute>
            <ItemDetail />
          </ProtectedRoute>
        } />

        {/* Normal User Dashboard [cite: 99] */}
        <Route path="/user-dashboard" element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        } />

        {/* --- Role-Based Admin Routes: Sirf "admin" role ke liye restricted hain [cite: 101] --- */}

        {/* Admin Dashboard [cite: 98] */}
        <Route path="/admin-dashboard" element={
          <ProtectedRoute roleRequired="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />

        {/* Create Item: Sirf Admin hi naya item bana sakta hai [cite: 18, 107] */}
        <Route path="/create-item" element={
          <ProtectedRoute roleRequired="admin">
            <CreateItem />
          </ProtectedRoute>
        } />

        {/* Edit Item: Sirf Admin hi items ko edit kar sakta hai [cite: 21, 36, 107] */}
        <Route path="/edit-item/:id" element={
          <ProtectedRoute roleRequired="admin">
            <EditItem />
          </ProtectedRoute>
        } />

        {/* 404 Page: Jab koi route match na ho [cite: 103] */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;