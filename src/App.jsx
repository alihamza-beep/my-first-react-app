import { Routes, Route } from "react-router-dom";
import React from 'react';

// Layouts imports
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";

// Basic Pages
import HomePage from "./components/pages/Home.jsx";
import AboutPage from "./components/pages/About.jsx";
import ContactPage from "./components/pages/Contact.jsx";
import PageNotFound from "./components/pages/PagesNotFound.jsx";

// Auth Pages (Mene rasta theek kiya hai taake error na aaye)
// Aapki screenshot ke mutabiq yeh files seedha 'pages' folder mein hain
import Login from "./components/pages/Login.jsx"; 
import SignUp from "./components/pages/SignUp.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 🔹 In routes ko add karne se Login/SignUp page khulega aur 404 nahi aayega */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;