import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ClearanceSale() {
  // Wishlist state for handling clicks
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 1. Aapke folder structure se images ka pool
  const imagesPool = [
    "/imgs/Luxury-pret.webp",
    "/imgs/Rohani.webp",
    "/imgs/Riwayat.webp",
    "/imgs/Matching_Separates_1.webp",
    "/imgs/Kids.webp",
    "/imgs/New-in.webp"
  ];

  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 100, // Unique ID for clearance
    name: `Clearance Article ${i + 1}`,
    price: "1,500",
    oldPrice: "4,500",
    discount: "65% OFF",
    img: imagesPool[i % imagesPool.length]
  }));

  const addToBag = (p) => {
    console.log("Added to bag:", p.name);
    alert(`${p.name} has been added to your bag!`);
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      {/* Premium Header */}
      <div className="text-center mb-5 mt-4">
        <span className="text-danger fw-bold tracking-widest d-block mb-2" style={{ fontSize: '12px' }}>LIMITED STOCK LEFT</span>
        <h2 className="fw-bold tracking-[0.3em] text-uppercase font-serif" style={{ fontSize: '32px' }}>CLEARANCE SALE</h2>
        <div className="mx-auto bg-black mt-1" style={{ width: '60px', height: '2px' }}></div>
      </div>

      {/* Product Grid */}
      <div className="row g-3 g-md-4 mb-5">
        {products.map((p) => (
          <div key={p.id} className="col-6 col-md-3">
            <div className="product-card position-relative border-0 group overflow-hidden bg-white">
              
              {/* Clearance Badges */}
              <div className="position-absolute top-0 start-0 d-flex flex-column gap-1 m-2" style={{ zIndex: 2 }}>
                <span className="bg-danger text-white px-2 py-1 fw-bold" style={{ fontSize: '9px' }}>{p.discount}</span>
                <span className="bg-dark text-white px-2 py-1 fw-bold text-uppercase" style={{ fontSize: '8px' }}>Final Sale</span>
              </div>

              {/* WISHLIST HEART ICON (Added) */}
              <button 
                onClick={() => toggleWishlist(p.id)}
                className="position-absolute top-0 end-0 m-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px', zIndex: 10, transition: '0.3s' }}
              >
                <i className={`bi ${wishlist[p.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '16px' }}></i>
              </button>

              {/* Image Container with Hover Zoom */}
              <Link to={`/item/${p.id}`} className="text-decoration-none">
                <div className="overflow-hidden bg-light" style={{ height: '400px' }}>
                  <img 
                    src={p.img} 
                    className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-zoom" 
                    alt={p.name} 
                  />
                </div>
              </Link>

              {/* Product Info Section */}
              <div className="card-body text-center pt-3 pb-3 px-1">
                <p className="text-uppercase mb-1 text-dark fw-semibold" style={{ fontSize: '11px', letterSpacing: '1.2px' }}>{p.name}</p>
                <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                  <span className="text-danger fw-bold" style={{ fontSize: '14px' }}>PKR {p.price}</span>
                  <span className="text-muted text-decoration-line-through" style={{ fontSize: '11px' }}>PKR {p.oldPrice}</span>
                </div>
                
                {/* Modern Add to Bag Button */}
                <button 
                  onClick={() => addToBag(p)}
                  className="btn btn-outline-dark rounded-0 w-100 py-2 text-uppercase tracking-widest font-bold clearance-btn" 
                  style={{ fontSize: '10px', transition: '0.4s' }}
                >
                  <i className="bi bi-bag-plus me-2"></i> Add to Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Internal Styles */}
      <style>{`
        .tracking-widest { letter-spacing: 0.25em; }
        .hover-zoom:hover { transform: scale(1.1); }
        .font-serif { font-family: 'Playfair Display', serif; }
        .product-card { transition: 0.3s; }
        .product-card:hover { transform: translateY(-5px); }
        .clearance-btn:hover {
          background-color: #000 !important;
          color: #fff !important;
          letter-spacing: 2px;
        }
        @media (max-width: 768px) {
            .product-card img { height: 300px !important; }
            .overflow-hidden { height: 300px !important; }
        }
      `}</style>
    </div>
  );
}

export default ClearanceSale;