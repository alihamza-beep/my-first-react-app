import { Routes, Route } from "react-router-dom";
import React from 'react';

// Charts aur Icons imports
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, 
  BarElement, ArcElement, Title, Tooltip, Legend, Filler 
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Home, Eye, ShoppingCart, Users, Settings, Package, Bell, ChevronDown } from 'lucide-react';

// Layouts imports
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";

// Pages imports
import HomePage from "./components/pages/Home.jsx";
import AboutPage from "./components/pages/About.jsx";
import ContactPage from "./components/pages/Contact.jsx";
import Login from "./components/pages/Login.jsx"; 
import SignUp from "./components/pages/Signup.jsx";
import PageNotFound from "./components/pages/PagesNotFound.jsx";
import CreateItem from "./components/pages/CreateItem.jsx";
import ViewAllItems from "./components/pages/ViewAllItems.jsx";
// --- UPDATED IMPORT ---
import ProductDetail from "./components/pages/ProductDetail.jsx"; 
import EditItem from "./components/pages/EditItem.jsx";

// Luxury & Brand Pages
import Collections from "./components/pages/Collections.jsx";
import TrackOrder from "./components/pages/TrackOrder.jsx";
import Assistance from "./components/pages/Assistance.jsx";
import Checkout from "./components/pages/Checkout.jsx";

// --- PROFILE IMPORT ---
import Profile from "./components/pages/profile.jsx";

// --- SALE PAGES IMPORTS ---
import Sale from "./components/pages/Sale/Sale.jsx";
import ClearanceSale from "./components/pages/Sale/ClearanceSale.jsx";
import Flat20Off from "./components/pages/Sale/Flat20Off.jsx";
import Flat30Off from "./components/pages/Sale/Flat30Off.jsx"; 
import Flat50Off from "./components/pages/Sale/Flat50Off.jsx";
import LastChance from "./components/pages/Sale/LastChance.jsx";

// --- MAIN CATEGORY IMPORTS ---
import NewIn from "./components/pages/New_In/New_in.jsx";
import ShopAll from "./components/pages/Shop_All/Shop_all.jsx";

// --- LUXURY PRET SUB-PAGES IMPORTS ---
import LuxuryPret from "./components/pages/Luxury_Pret/Luxury_pret.jsx";
import FestiveWear from "./components/pages/Luxury_Pret/Festive_Wear.jsx";
import VelvetSaga from "./components/pages/Luxury_Pret/Velvet_Saga.jsx";
import WeddingEdition from "./components/pages/Luxury_Pret/Wedding_Edition.jsx";
import Zarish from "./components/pages/Luxury_Pret/Zarish.jsx";
import Zarqash from "./components/pages/Luxury_Pret/Zarqash.jsx";

// --- ROZMARA RTW SUB-PAGES IMPORTS ---
import RozmaraRtw from "./components/pages/Rozmara_RTW/Rozmara_rtw.jsx";
import Solids from "./components/pages/Rozmara_RTW/Solids.jsx";
import Embroidered from "./components/pages/Rozmara_RTW/Embroidered.jsx";
import Prints from "./components/pages/Rozmara_RTW/Prints.jsx";
import Khaddar from "./components/pages/Rozmara_RTW/Khaddar.jsx";
import FusionPop from "./components/pages/Rozmara_RTW/Fusion_Pop.jsx";

// --- KIDS SUB-PAGES IMPORTS ---
import Kids from "./components/pages/Kids/kids.jsx";
import Basics from "./components/pages/Kids/Basics.jsx";
import EveryDay from "./components/pages/Kids/Every_Day.jsx";
import Formals from "./components/pages/Kids/Formals.jsx";
import SilkySmiles from "./components/pages/Kids/Silky_Smiles.jsx";
import Tops from "./components/pages/Kids/Tops.jsx";

// --- ACCESSORIES SUB-PAGES IMPORTS ---
import Accessories from "./components/pages/Accessories/Accessories.jsx";
import Bags from "./components/pages/Accessories/Bags.jsx";
import Fragrances from "./components/pages/Accessories/Fragrances.jsx";
import Jewelry from "./components/pages/Accessories/Jewelry.jsx";
import Shoes from "./components/pages/Accessories/Shoes.jsx";
import Stoles from "./components/pages/Accessories/Stoles.jsx";

// --- WISHLIST IMPORT ---
import Wishlist from "./components/pages/Wishlist.jsx";

// Register ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);

// Context aur Protected Route import
import { ProtectedRoute } from "./ProtectedRoute"; 

const AdminDashboard = () => {
  const chartOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } };
  const commonData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      fill: true,
      label: 'Data',
      data: [200, 300, 250, 400, 350, 480, 420],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
    }],
  };

  return (
    <div className="flex min-h-screen bg-[#0f0f12] text-gray-200">
      <aside className="w-64 bg-[#1a1a2e] p-6 hidden lg:flex flex-col gap-6 border-r border-gray-800">
        <nav className="flex flex-col gap-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-600 text-white cursor-pointer"><Home size={18}/> HOME</div>
            <div className="flex items-center gap-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 cursor-pointer"><Eye size={18}/> VIEW SITE</div>
            <div className="flex items-center gap-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 cursor-pointer"><ShoppingCart size={18}/> SALES & MARKETING</div>
            <div className="flex items-center gap-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 cursor-pointer"><Package size={18}/> PRODUCTS & INVENT...</div>
            <div className="flex items-center gap-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 cursor-pointer"><Users size={18}/> USER MANAGEMENT</div>
            <div className="flex items-center gap-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 cursor-pointer"><Settings size={18}/> ADMIN SETTINGS</div>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Home</h2>
          <div className="flex items-center gap-4">
             <input type="text" placeholder="Search..." className="bg-[#161625] px-4 py-1.5 rounded border border-gray-700 outline-none" />
             <Bell size={20} className="text-gray-400" />
             <div className="flex items-center gap-2"><span>aliza</span> <ChevronDown size={14}/></div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[['Users', '120', '↑ 11.4%'], ['Orders', '45', ''], ['Revenue', '$5,000', ''], ['Conversion', '35%', '']].map((item, i) => (
            <div key={i} className="bg-[#161625] p-5 rounded-xl border border-gray-800">
              <p className="text-gray-400 text-sm">{item[0]}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-2xl font-bold">{item[1]}</h3>
                {item[2] && <span className="text-green-500 text-xs">{item[2]}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#161625] p-6 rounded-xl border border-gray-800 h-64">
            <p className="text-sm font-semibold mb-4">Sales</p>
            <Line data={commonData} options={chartOptions} />
          </div>
          <div className="bg-[#161625] p-6 rounded-xl border border-gray-800 h-64 flex flex-col items-center">
             <p className="text-sm font-semibold mb-4 self-start">Users by Role</p>
             <div className="h-40 w-40">
                <Doughnut data={{
                  labels: ['Admin', 'Staff', 'Customers'],
                  datasets: [{ data: [15, 25, 60], backgroundColor: ['#10b981', '#3b82f6', '#6366f1'], borderWidth: 0 }]
                }} />
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

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
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/new-in" element={<NewIn />} />

        <Route path="/rozmara-rtw" element={<RozmaraRtw />} />
        <Route path="/rozmara-rtw/solids" element={<Solids />} />
        <Route path="/rozmara-rtw/embroidered" element={<Embroidered />} />
        <Route path="/rozmara-rtw/prints" element={<Prints />} />
        <Route path="/rozmara-rtw/khaddar" element={<Khaddar />} />
        <Route path="/rozmara-rtw/fusion-pop" element={<FusionPop />} />

        <Route path="/kids" element={<Kids />} />
        <Route path="/kids/basics" element={<Basics />} />
        <Route path="/kids/everyday" element={<EveryDay />} />
        <Route path="/kids/formals" element={<Formals />} />
        <Route path="/kids/silky-smiles" element={<SilkySmiles />} />
        <Route path="/kids/tops" element={<Tops />} />

        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accessories/bags" element={<Bags />} />
        <Route path="/accessories/fragrances" element={<Fragrances />} />
        <Route path="/accessories/jewelry" element={<Jewelry />} />
        <Route path="/accessories/shoes" element={<Shoes />} />
        <Route path="/accessories/stoles" element={<Stoles />} />

        <Route path="/luxury-pret" element={<LuxuryPret />} />
        <Route path="/luxury-pret/festive-wear" element={<FestiveWear />} />
        <Route path="/luxury-pret/velvet-saga" element={<VelvetSaga />} />
        <Route path="/luxury-pret/wedding-edition" element={<WeddingEdition />} />
        <Route path="/luxury-pret/zarish" element={<Zarish />} />
        <Route path="/luxury-pret/zarqash" element={<Zarqash />} />

        <Route path="/sale" element={<Sale />} />
        <Route path="/sale/clearance" element={<ClearanceSale />} />
        <Route path="/sale/flat20" element={<Flat20Off />} />
        <Route path="/sale/flat30" element={<Flat30Off />} /> 
        <Route path="/sale/flat50" element={<Flat50Off />} />
        <Route path="/sale/last-chance" element={<LastChance />} />
        
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/assistance" element={<Assistance />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path="/view-all-items" element={<ProtectedRoute><ViewAllItems /></ProtectedRoute>} />
        
        {/* --- DYNAMIC ROUTE UPDATED TO USE PRODUCTDETAIL --- */}
        <Route path="/item/:id" element={<ProductDetail />} /> 

        <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />

        <Route path="/admin-dashboard" element={<ProtectedRoute roleRequired="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/create-item" element={<ProtectedRoute roleRequired="admin"><CreateItem /></ProtectedRoute>} />
        <Route path="/edit-item/:id" element={<ProtectedRoute roleRequired="admin"><EditItem /></ProtectedRoute>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;