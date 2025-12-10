// 1. Routes aur Route ko react-router-dom se import karna zaroori hai [cite: 19]
import { Routes, Route } from "react-router-dom";

// Components imports (Jaise aapne kiye hain, lekin sahi naamon ke saath)
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx"; // Footer ko main yahan rakhta hoon
import HomePage from "./components/pages/HomePage.jsx"; // Home ko HomePage maan lete hain
import AboutPage from "./components/pages/AboutPage.jsx"; // About ko AboutPage maan lete hain
import ContactPage from "./components/pages/ContactPage.jsx"; // Contact ko ContactPage maan lete hain
import PageNotFound from "./components/pages/PageNotFound"; // 404 page ke liye [cite: 23]

// Faqs view ko yahan import karne ki zaroorat nahi, woh HomePage ke andar use hoga.
// import Faqs from "./components/views/homeViews/Faqs.jsx"; 


function App() {
  return (
    <>
      {/* 2. Navbar aur Footer Routes se bahar rahenge taaki woh har page par dikhe [cite: 26] */}
      <Navbar />

      {/* 3. <Routes> tag ke andar har URL ke liye <Route> define kiya jayega [cite: 27] */}
      <Routes>
        
        {/* Home Route: jab path "/" ho, tab HomePage component dikhe [cite: 28] */}
        <Route path="/" element={<HomePage />} />
        
        {/* About Route: jab path "/about" ho, tab AboutPage component dikhe [cite: 29] */}
        <Route path="/about" element={<AboutPage />} />
        
        {/* Contact Route: jab path "/contact" ho, tab ContactPage component dikhe [cite: 30] */}
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Wildcard Route: Koi bhi URL match na hone par PageNotFound dikhe [cite: 31] */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;