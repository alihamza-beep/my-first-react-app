import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewIn() {
  // Wishlist state
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Image pool from your folder
  const imagesPool = [
    "/imgs/Luxury-pret.webp",
    "/imgs/Rohani.webp",
    "/imgs/Riwayat.webp",
    "/imgs/Matching_Separates_1.webp",
    "/imgs/Kids.webp",
    "/imgs/New-in.webp",
    "/imgs/Prints_1.webp",
    "/imgs/Mein_aur_ami.webp"
  ];

  // 2. New Arrival Products (40 Items)
  const newProducts = Array.from({ length: 40 }).map((_, index) => ({
    id: index + 1000,
    name: `New Arrival Item ${index + 1}`,
    price: "5,500",
    tag: "NEW IN",
    img: imagesPool[index % imagesPool.length]
  }));

  const addToBag = (product) => {
    alert(`${product.name} added to bag!`);
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      {/* Header Section - Space Adjusted */}
      <div className="text-center mb-5 mt-4">
        <h2 className="fw-bold tracking-[0.3em] text-uppercase font-serif" style={{ fontSize: '30px' }}>NEW ARRIVALS</h2>
        <p className="text-muted" style={{ fontSize: '11px', letterSpacing: '2px' }}>FRESH STYLES JUST LANDED</p>
        <div className="mx-auto bg-dark mt-2" style={{ width: '40px', height: '2.5px' }}></div>
      </div>
      
      {/* Category Circles Row - REMOVED AS REQUESTED */}

      {/* Product Grid */}
      <div className="row g-3 g-md-4 mb-5 mt-2">
        {newProducts.map((product) => (
          <div key={product.id} className="col-6 col-md-3">
            <div className="product-card position-relative border-0 group overflow-hidden bg-white shadow-sm pb-3 h-100 d-flex flex-column">
              
              {/* New Tag */}
              <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 m-2 fw-bold" style={{ fontSize: '9px', zIndex: 2 }}>
                {product.tag}
              </span>

              {/* Wishlist Heart Icon */}
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="position-absolute top-0 end-0 m-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px', zIndex: 10, transition: '0.3s' }}
              >
                <i className={`bi ${wishlist[product.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '16px' }}></i>
              </button>

              {/* Product Image Link */}
              <Link to={`/item/${product.id}`} className="text-decoration-none">
                <div className="overflow-hidden bg-light" style={{ height: '400px' }}>
                  <img 
                    src={product.img} 
                    className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-zoom" 
                    alt={product.name} 
                  />
                </div>
              </Link>

              {/* Info Section */}
              <div className="text-center pt-3 px-2 mt-auto">
                <p className="text-uppercase mb-1 text-dark fw-semibold text-truncate" style={{ fontSize: '11px', letterSpacing: '1.2px' }}>{product.name}</p>
                <p className="mb-3" style={{ fontSize: '14px' }}>
                  <span className="text-dark fw-bold">PKR {product.price}</span>
                </p>
                
                {/* Add to Bag Button */}
                <button 
                  onClick={() => addToBag(product)}
                  className="btn btn-dark rounded-0 w-75 py-2 text-uppercase tracking-widest font-bold sale-btn" 
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
        .product-card { transition: 0.3s ease-in-out; }
        .product-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important; }
        .sale-btn { transition: 0.4s; }
        .sale-btn:hover { background-color: #333 !important; letter-spacing: 2px !important; }
        @media (max-width: 768px) {
            .overflow-hidden { height: 320px !important; }
        }
      `}</style>
    </div>
  );
}

export default NewIn;