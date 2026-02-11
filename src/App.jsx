import { Routes, Route } from "react-router-dom";
import React from 'react';

// Context aur Protected Route import
import { ProtectedRoute } from "./ProtectedRoute"; 

// Layouts imports - Folder name 'layouts' aur 'components' small hain
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";
// ScrollToTop removed as requested

// Pages imports - Folder name 'pages' small hai
import HomePage from "./components/pages/Home.jsx";
import AboutPage from "./components/pages/About.jsx";
import ContactPage from "./components/pages/Contact.jsx";
import Login from "./components/pages/Login.jsx"; 
import SignUp from "./components/pages/Signup.jsx";
import PageNotFound from "./components/pages/PagesNotFound.jsx";
import CreateItem from "./components/pages/CreateItem.jsx";
import ViewAllItems from "./components/pages/ViewAllItems.jsx";
import ItemDetail from "./components/pages/ViewSingleItem.jsx";
import EditItem from "./components/pages/EditItem.jsx";

// Luxury & Brand Pages
import Collections from "./components/pages/Collections.jsx";
import TrackOrder from "./components/pages/TrackOrder.jsx";
import Assistance from "./components/pages/Assistance.jsx";
import Checkout from "./components/pages/Checkout.jsx";

// Dashboards
const AdminDashboard = () => (
  <div className="container py-10 text-center" style={{ minHeight: '80vh' }}>
    <h2 className="display-5 font-bold">Admin Dashboard</h2>
    <p className="lead">Manage all products and users from here.</p>
  </div>
);

const UserDashboard = () => (
  <div className="container py-10 text-center" style={{ minHeight: '80vh' }}>
    <h2 className="display-5 font-bold">User Dashboard</h2>
    <p className="lead">View your profile and managed items.</p>
  </div>
);

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* --- Luxury Category Routes --- */}
        <Route path="/women" element={<Collections title="Women's Collection" />} />
        <Route path="/men" element={<Collections title="Men's Portfolio" />} />
        <Route path="/kids" element={<Collections title="Miniatures (Kids)" />} />
        <Route path="/luxury" element={<Collections title="Limited Edition" />} />
        
        {/* --- Brand System Routes --- */}
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/assistance" element={<Assistance />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* --- Protected User Routes --- */}
        <Route path="/view-all-items" element={<ProtectedRoute><ViewAllItems /></ProtectedRoute>} />
        <Route path="/item/:id" element={<ProtectedRoute><ItemDetail /></ProtectedRoute>} />
        <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />

        {/* --- Admin Restricted Routes --- */}
        <Route path="/admin-dashboard" element={<ProtectedRoute roleRequired="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/create-item" element={<ProtectedRoute roleRequired="admin"><CreateItem /></ProtectedRoute>} />
        <Route path="/edit-item/:id" element={<ProtectedRoute roleRequired="admin"><EditItem /></ProtectedRoute>} />

        {/* 404 Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;