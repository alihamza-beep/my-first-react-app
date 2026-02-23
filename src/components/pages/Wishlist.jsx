import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext"; // FIXED: Correct path for components/pages structure

function Wishlist() {
  // useAuth se user aur logout wagera milta hai, 
  // Agar context mein darkMode nahi hai toh hum yahan manual check kar letay hain
  const { user } = useAuth(); 
  const darkMode = localStorage.getItem("themeMode") === "dark";
  
  // Static Data (Inhein baad mein Firebase se replace kiya ja sakta hai)
  const wishlistItems = [
    {
      id: 1,
      name: "2PC Girl - Embroidered Jacquard Suit",
      price: "7,895",
      salePrice: "3,158",
      img: "/imgs/Luxury-pret.webp",
    },
    {
      id: 2,
      name: "Luxury Silk Stole - Accessories",
      price: "2,500",
      salePrice: "1,800",
      img: "/imgs/Kids.webp",
    }
  ];

  return (
    <div className={`min-vh-100 py-5 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-dark"}`} style={{ marginTop: '60px' }}>
      <div className="container mt-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold tracking-[0.3em] text-uppercase font-serif" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>My Wishlist</h2>
          <div className="d-flex justify-content-center align-items-center gap-2 opacity-75 mt-2">
            <i className="bi bi-heart-fill text-danger"></i>
            <span style={{ fontSize: '12px', letterSpacing: '2px' }}>{wishlistItems.length} ITEMS SAVED</span>
          </div>
        </div>

        <hr className={`mb-5 ${darkMode ? "border-secondary" : "border-dark opacity-10"}`} />

        {wishlistItems.length > 0 ? (
          <div className="row g-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="col-6 col-md-4 col-lg-3">
                <div className={`card h-100 border-0 rounded-0 shadow-sm overflow-hidden position-relative group ${darkMode ? "bg-[#1a1a1a]" : "bg-white"}`}>
                  
                  {/* Remove Button */}
                  <button 
                    className="position-absolute top-0 end-0 m-3 border-0 bg-white shadow-sm d-flex align-items-center justify-content-center rounded-circle hover-scale"
                    style={{ width: '32px', height: '32px', zIndex: 10, transition: '0.3s' }}
                    title="Remove from Wishlist"
                  >
                    <i className="bi bi-x-lg text-dark" style={{ fontSize: '14px' }}></i>
                  </button>

                  {/* Image Container */}
                  <div className="position-relative overflow-hidden" style={{ height: '380px' }}>
                    <Link to={`/product/${item.id}`}>
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-100 h-100 object-fit-cover img-zoom"
                      />
                    </Link>
                    {/* Hover Overlay */}
                    <div className="image-overlay d-none d-md-block"></div>
                  </div>

                  {/* Product Details */}
                  <div className={`card-body px-0 py-4 text-center ${darkMode ? "text-white" : "text-dark"}`}>
                    <h6 className="fw-medium mb-2 text-uppercase tracking-widest" style={{ fontSize: '11px', lineHeight: '1.5' }}>
                      {item.name}
                    </h6>
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                      <span className="text-muted text-decoration-line-through" style={{ fontSize: '12px' }}>
                        PKR {item.price}
                      </span>
                      <span className="text-danger fw-bold" style={{ fontSize: '14px' }}>
                        PKR {item.salePrice}
                      </span>
                    </div>
                    
                    {/* Add to Bag Button */}
                    <button className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"} rounded-0 w-100 py-2 text-uppercase tracking-widest font-medium`} style={{ fontSize: '10px' }}>
                      <i className="bi bi-bag me-2"></i> Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State Section */
          <div className="text-center py-5">
            <div className="mb-4">
              <i className={`bi bi-heart ${darkMode ? "text-secondary" : "text-muted"}`} style={{ fontSize: '60px', opacity: '0.3' }}></i>
            </div>
            <h4 className="fw-bold tracking-widest text-uppercase">Your Wishlist is Empty</h4>
            <p className="opacity-75 mb-5 mt-3" style={{ maxWidth: '400px', margin: '0 auto', fontSize: '14px' }}>
              Keep track of items you love by clicking the heart icon. We'll save them here for you!
            </p>
            <Link to="/shop-all" className="btn btn-dark px-5 py-3 rounded-0 tracking-widest text-uppercase shadow-lg hover-up">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .tracking-widest { letter-spacing: 0.15em; }
        .img-zoom { transition: transform 0.8s ease; }
        .group:hover .img-zoom { transform: scale(1.1); }
        .hover-scale:hover { transform: scale(1.1) rotate(90deg); background-color: #ffefef !important; }
        .image-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.02);
          transition: 0.3s;
          pointer-events: none;
        }
        .group:hover .image-overlay { background: rgba(0,0,0,0); }
        .hover-up { transition: 0.3s; }
        .hover-up:hover { transform: translateY(-3px); }
        @media (max-width: 768px) {
          .card-img-top { height: 280px !important; }
        }
      `}</style>
    </div>
  );
}

export default Wishlist;