import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext"; // Path ensure kar lein

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const darkMode = localStorage.getItem("themeMode") === "dark";

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={`min-vh-100 py-5 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-dark"}`} style={{ marginTop: '70px' }}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            {/* Header Section */}
            <div className="text-center mb-5">
              <h2 className="fw-bold tracking-[0.3em] text-uppercase font-serif">My Account</h2>
              <p className="opacity-75 mt-2" style={{ fontSize: '12px', letterSpacing: '2px' }}>
                WELCOME BACK, {user?.displayName || user?.email?.split('@')[0].toUpperCase()}
              </p>
            </div>

            <div className="row g-5">
              {/* Left Side: Profile Details */}
              <div className="col-md-4">
                <div className={`p-4 border-0 rounded-0 shadow-sm h-100 ${darkMode ? "bg-[#1a1a1a]" : "bg-light"}`}>
                  <h5 className="fw-bold mb-4 text-uppercase tracking-widest border-bottom pb-2" style={{ fontSize: '14px' }}>Account Details</h5>
                  
                  <div className="mb-4">
                    <p className="mb-1 text-muted text-uppercase" style={{ fontSize: '10px', fontWeight: 'bold' }}>Name</p>
                    <p className="fw-medium m-0">{user?.displayName || "Guest User"}</p>
                  </div>

                  <div className="mb-4">
                    <p className="mb-1 text-muted text-uppercase" style={{ fontSize: '10px', fontWeight: 'bold' }}>Email Address</p>
                    <p className="m-0 text-truncate">{user?.email || "Not Available"}</p>
                  </div>

                  <div className="mb-4">
                    <p className="mb-1 text-muted text-uppercase" style={{ fontSize: '10px', fontWeight: 'bold' }}>Country / Region</p>
                    <p className="m-0">Pakistan</p>
                  </div>

                  <div className="d-flex flex-column gap-2 mt-5">
                    <button className={`btn btn-sm rounded-0 text-uppercase tracking-widest py-2 ${darkMode ? "btn-outline-light" : "btn-dark"}`} style={{ fontSize: '11px' }}>
                      Edit Profile
                    </button>
                    <button onClick={handleLogout} className="btn btn-sm btn-outline-danger rounded-0 text-uppercase tracking-widest py-2" style={{ fontSize: '11px' }}>
                      Logout Account
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side: Order History Preview */}
              <div className="col-md-8">
                <div className={`p-4 border-0 rounded-0 shadow-sm h-100 ${darkMode ? "bg-[#1a1a1a]" : "bg-light"}`}>
                  <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                    <h5 className="fw-bold m-0 text-uppercase tracking-widest" style={{ fontSize: '14px' }}>Order History</h5>
                    <button className="btn btn-link text-dark text-decoration-none p-0 text-uppercase fw-bold" style={{ fontSize: '10px', color: darkMode ? '#fff' : '#000' }}>View All</button>
                  </div>

                  {/* Empty Order State (Aap isay logic se replace kar sakti hain) */}
                  <div className="text-center py-5 opacity-50">
                    <i className="bi bi-box-seam mb-3 d-block" style={{ fontSize: '40px' }}></i>
                    <p className="tracking-widest m-0" style={{ fontSize: '11px' }}>YOU HAVEN'T PLACED ANY ORDERS YET.</p>
                  </div>

                  {/* Quick Links Section */}
                  <div className="mt-5 pt-4 border-top">
                    <h6 className="fw-bold text-uppercase tracking-widest mb-3" style={{ fontSize: '12px' }}>Support Center</h6>
                    <div className="row g-3">
                      <div className="col-6 col-sm-4">
                        <div className={`p-3 text-center cursor-pointer hover-bg border ${darkMode ? "border-secondary" : "border-white bg-white"}`} onClick={() => navigate('/track')}>
                          <i className="bi bi-truck d-block mb-1"></i>
                          <span style={{ fontSize: '10px' }} className="text-uppercase fw-bold">Track Order</span>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4">
                        <div className={`p-3 text-center cursor-pointer hover-bg border ${darkMode ? "border-secondary" : "border-white bg-white"}`} onClick={() => navigate('/wishlist')}>
                          <i className="bi bi-heart d-block mb-1"></i>
                          <span style={{ fontSize: '10px' }} className="text-uppercase fw-bold">My Wishlist</span>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4">
                        <div className={`p-3 text-center cursor-pointer hover-bg border ${darkMode ? "border-secondary" : "border-white bg-white"}`} onClick={() => navigate('/assistance')}>
                          <i className="bi bi-chat-left-dots d-block mb-1"></i>
                          <span style={{ fontSize: '10px' }} className="text-uppercase fw-bold">Assistance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tracking-widest { letter-spacing: 0.15em; }
        .hover-bg { transition: 0.3s; }
        .hover-bg:hover { background: #000 !important; color: #fff !important; border-color: #000 !important; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}

export default Profile;