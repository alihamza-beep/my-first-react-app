import { Routes, Route } from "react-router-dom";
import React from 'react';

// Context aur Protected Route import karein
import { ProtectedRoute } from "./ProtectedRoute"; 

// Layouts imports
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";

// Pages imports
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

// Dashboards
const AdminDashboard = () => <div className="p-10 text-center text-2xl font-bold">Admin Dashboard - Welcome Admin!</div>;
const UserDashboard = () => <div className="p-10 text-center text-2xl font-bold">User Dashboard - Welcome User!</div>;

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes (Sirf Login hona kafi hai) */}
        <Route path="/view-all-items" element={
          <ProtectedRoute>
            <ViewAllItems />
          </ProtectedRoute>
        } />
        
        <Route path="/item/:id" element={
          <ProtectedRoute>
            <ItemDetail />
          </ProtectedRoute>
        } />

        <Route path="/user-dashboard" element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        } />

        {/* Admin Dashboard (Abhi bhi admin role chahiye) */}
        <Route path="/admin-dashboard" element={
          <ProtectedRoute roleRequired="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />

        {/* Create Item (Role hata diya gaya hai taake aap test kar saken) */}
        <Route path="/create-item" element={
          <ProtectedRoute>
            <CreateItem />
          </ProtectedRoute>
        } />

        {/* EDIT ITEM FIX: roleRequired="admin" hata diya gaya hai */}
        <Route path="/edit-item/:id" element={
          <ProtectedRoute>
            <EditItem />
          </ProtectedRoute>
        } />

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;