import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LastChance() {
  // Wishlist state
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Aapke folder structure se images
  const imagesPool = [
    "/imgs/Luxury-pret.webp",
    "/imgs/Rohani.webp",
    "/imgs/Riwayat.webp",
    "/imgs/Matching_Separates_1.webp",
    "/imgs/Kids.webp",
    "/imgs/New-in.webp"
  ];

  // Last Chance products data
  const products = Array.from({ length: 16 }).map((_, i) => ({
    id: i + 900,
    name: `Final Call Article ${i + 1}`,
    price: "2,100",
    oldPrice: "6,000",
    discount: "LAST CHANCE",
    img: imagesPool[i % imagesPool.length]
  }));

  const addToBag = (p) => {
    alert(`${p.name} added to bag before it's gone!`);
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      {/* Premium Header with Urgency Message */}
      <div className="text-center py-5 mb-5" style={{ backgroundColor: '#fff5f5', border: '1px dashed #dc3545' }}>
        <h1 className="fw-bold tracking-[0.3em] text-uppercase font-serif mb-3" style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}>Last Chance</h1>
        <p className="text-muted text-uppercase mb-4" style={{ fontSize: '12px', letterSpacing: '2px' }}>
          Items are selling fast! Grab yours before they are gone forever.
        </p>
        <div className="bg-danger text-white d-inline-block px-4 py-2 fw-bold tracking-widest" style={{ fontSize: '11px' }}>
          FINAL REDUCTIONS UP TO 70% OFF
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-3 g-md-4 mb-5">
        {products.map((p) => (
          <div key={p.id} className="col-6 col-md-3">
            <div className="product-card position-relative border-0 group overflow-hidden bg-white shadow-sm pb-3">
              
              {/* Last Chance Badge */}
              <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 m-2 fw-bold" style={{ fontSize: '9px', zIndex: 2, letterSpacing: '1px' }}>
                {p.discount}
              </span>

              {/* Wishlist Heart Icon */}
              <button 
                onClick={() => toggleWishlist(p.id)}
                className="position-absolute top-0 end-0 m-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px', zIndex: 10, transition: '0.3s' }}
              >
                <i className={`bi ${wishlist[p.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '16px' }}></i>
              </button>

              {/* Product Image Link */}
              <Link to={`/item/${p.id}`} className="text-decoration-none">
                <div className="overflow-hidden bg-light" style={{ height: '400px' }}>
                  <img 
                    src={p.img} 
                    className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-zoom" 
                    alt={p.name} 
                  />
                </div>
              </Link>

              {/* Info Section */}
              <div className="text-center pt-3 px-2">
                <p className="text-uppercase mb-1 text-dark fw-semibold" style={{ fontSize: '11px', letterSpacing: '1.2px' }}>{p.name}</p>
                <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                  <span className="text-danger fw-bold" style={{ fontSize: '14px' }}>PKR {p.price}</span>
                  <span className="text-muted text-decoration-line-through" style={{ fontSize: '11px' }}>PKR {p.oldPrice}</span>
                </div>
                
                {/* Add to Bag Button */}
                <button 
                  onClick={() => addToBag(p)}
                  className="btn btn-dark rounded-0 w-75 py-2 text-uppercase tracking-widest font-bold last-chance-btn" 
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
        .hover-zoom:hover { transform: scale(1.1); }
        .font-serif { font-family: 'Playfair Display', serif; }
        .product-card { transition: 0.3s ease-in-out; border: 1px solid transparent !important; }
        .product-card:hover { border-color: #eee !important; box-shadow: 0 10px 25px rgba(0,0,0,0.05) !important; }
        .last-chance-btn { transition: 0.4s; }
        .last-chance-btn:hover { background-color: #dc3545 !important; border-color: #dc3545 !important; letter-spacing: 2px !important; }
        @media (max-width: 768px) {
            .overflow-hidden { height: 320px !important; }
        }
      `}</style>
    </div>
  );
}

export default LastChance;