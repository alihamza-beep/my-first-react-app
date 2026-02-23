import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

function LuxuryPretPage({ title = "Wedding Edition" }) {
  const [wishlist, setWishlist] = useState({});
  const [sortBy, setSortBy] = useState("featured");

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Luxury images pool from project assets
  const imagesPool = [
    "/imgs/Luxury-pret.webp",
    "/imgs/Rohani.webp",
    "/imgs/Riwayat.webp",
    "/imgs/Matching_Separates_1.webp",
    "/imgs/New-in.webp"
  ];

  // Generating products based on the Wedding Edition theme
  const initialProducts = useMemo(() => Array.from({ length: 8 }).map((_, i) => ({
    id: `wedding-edition-${i}`,
    name: `Wedding Edition Article ${i + 1}`,
    price: 35000 + (i * 1000), // Wedding articles have high-end luxury pricing
    img: imagesPool[i % imagesPool.length]
  })), []);

  // Sorting logic for luxury items
  const sortedProducts = useMemo(() => {
    let tempProducts = [...initialProducts];
    if (sortBy === "low") tempProducts.sort((a, b) => a.price - b.price);
    if (sortBy === "high") tempProducts.sort((a, b) => b.price - a.price);
    return tempProducts;
  }, [sortBy, initialProducts]);

  const addToBag = (product) => {
    alert(`${product.name} added to your bridal bag!`);
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      {/* Premium Header for Wedding Edition */}
      <div className="text-center mb-4 mt-4">
        <h2 className="fw-bold tracking-[0.4em] text-uppercase font-serif" style={{ fontSize: '28px' }}>{title}</h2>
        <div className="mx-auto bg-dark mt-2 mb-2" style={{ width: '40px', height: '2px' }}></div>
        <p className="text-muted small text-uppercase tracking-widest" style={{ fontSize: '10px' }}>Luxury Pret / {title}</p>
      </div>

      {/* Filter & Sort Bar */}
      <div className="d-flex justify-content-between align-items-center py-3 mb-4 border-top border-bottom">
        <div className="text-uppercase fw-bold text-muted" style={{ fontSize: '11px' }}>
          {sortedProducts.length} Articles Found
        </div>
        <div className="d-flex align-items-center">
          <span className="me-2 d-none d-md-block" style={{ fontSize: '12px' }}>Sort by:</span>
          <select 
            className="border-0 bg-transparent text-uppercase fw-semibold" 
            style={{ fontSize: '11px', outline: 'none', cursor: 'pointer' }}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">New in Wedding</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-3 g-md-4 mb-5">
        {sortedProducts.map((p) => (
          <div key={p.id} className="col-6 col-md-3">
            <div className="product-card position-relative border-0 group overflow-hidden bg-white shadow-sm pb-3 h-100 d-flex flex-column">
              
              {/* --- WISHLIST HEART ICON (White Circle Style) --- */}
              <button 
                onClick={() => toggleWishlist(p.id)}
                className="position-absolute top-0 end-0 m-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px', zIndex: 10, transition: '0.3s' }}
              >
                <i className={`bi ${wishlist[p.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '16px' }}></i>
              </button>

              <Link to={`/item/${p.id}`} className="text-decoration-none">
                <div className="overflow-hidden position-relative" style={{ height: '420px' }}>
                  <img 
                    src={p.img} 
                    className="w-100 h-100 object-fit-cover transition-transform duration-1000 hover-luxury-zoom" 
                    alt={p.name} 
                  />
                  <div className="position-absolute bottom-0 start-0 m-2 px-2 py-1 bg-white opacity-75 fw-bold" style={{ fontSize: '8px', letterSpacing: '1px' }}>
                    WEDDING EDITION
                  </div>
                </div>
              </Link>

              <div className="text-center pt-3 px-2 mt-auto">
                <h6 className="text-uppercase mb-1 text-dark fw-medium text-truncate" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                  {p.name}
                </h6>
                <p className="mb-3" style={{ fontSize: '14px' }}>
                  <span className="text-dark fw-bold text-uppercase">PKR {p.price.toLocaleString()}</span>
                </p>
                
                <button 
                  onClick={() => addToBag(p)}
                  className="btn btn-dark rounded-0 w-100 py-2 text-uppercase tracking-widest font-bold luxury-btn" 
                  style={{ fontSize: '10px' }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover-luxury-zoom:hover { transform: scale(1.08); }
        .font-serif { font-family: 'Playfair Display', serif; }
        .product-card { transition: 0.4s ease; border: 1px solid transparent !important; }
        .product-card:hover { border-color: #f1f1f1 !important; box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important; }
        .luxury-btn { transition: 0.4s ease; border: 1px solid #000; }
        .luxury-btn:hover { background-color: transparent !important; color: #000 !important; letter-spacing: 2px !important; }
        @media (max-width: 768px) {
            .overflow-hidden { height: 300px !important; }
        }
      `}</style>
    </div>
  );
}

export default LuxuryPretPage;