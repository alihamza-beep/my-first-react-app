import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ShopAll() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState({});

  const categories = ["All", "Unstitched", "Ready To Wear", "Kids", "Accessories", "Luxury Pret"];

  // Image pool from your project's public folder
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

  // 40 Products Data
  const allProducts = Array.from({ length: 40 }).map((_, i) => ({
    id: i + 2000,
    name: `ALZA Signature Item ${i + 1}`,
    price: "4,950",
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    img: imagesPool[i % imagesPool.length]
  }));

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const addToBag = (product) => {
    alert(`${product.name} added to bag!`);
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      <div className="row mt-4">
        
        {/* 1. Professional Sidebar (Left Side) */}
        <div className="col-lg-2 d-none d-lg-block border-end pe-4">
          <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
            <h5 className="fw-bold mb-4 tracking-[0.2em] text-uppercase" style={{ fontSize: '13px' }}>Filters</h5>
            
            <div className="mb-5">
              <p className="fw-bold mb-3 tracking-widest" style={{ fontSize: '11px', color: '#888' }}>CATEGORY</p>
              {categories.map((cat) => (
                <div key={cat} className="mb-2">
                  <label className="d-flex align-items-center cursor-pointer group">
                    <input 
                      type="radio" 
                      name="cat" 
                      className="form-check-input me-2" 
                      checked={activeFilter === cat}
                      onChange={() => setActiveFilter(cat)}
                      style={{ cursor: 'pointer', accentColor: '#000' }}
                    />
                    <span className={`small text-uppercase tracking-wider ${activeFilter === cat ? 'fw-bold' : 'opacity-75'}`} style={{ fontSize: '11px' }}>
                      {cat}
                    </span>
                  </label>
                </div>
              ))}
            </div>

            <div className="mb-4 pt-4 border-top">
              <p className="fw-bold mb-3 tracking-widest" style={{ fontSize: '11px', color: '#888' }}>PRICE RANGE</p>
              <ul className="list-unstyled small tracking-wider text-uppercase" style={{ fontSize: '10px', lineHeight: '2.5' }}>
                <li className="cursor-pointer hover-link">Under PKR 2,000</li>
                <li className="cursor-pointer hover-link">PKR 2,000 - 5,000</li>
                <li className="cursor-pointer hover-link">Above PKR 5,000</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Main Product Grid (Right Side) */}
        <div className="col-lg-10 ps-lg-5">
          {/* Header Bar */}
          <div className="d-flex justify-content-between align-items-end mb-5 pb-3 border-bottom">
            <div>
              <h2 className="fw-bold tracking-[0.3em] text-uppercase font-serif m-0" style={{ fontSize: '28px' }}>Shop All</h2>
              <p className="text-muted m-0 mt-1 uppercase tracking-widest" style={{ fontSize: '10px' }}>Exploring {activeFilter} Collection</p>
            </div>
            <div className="small tracking-widest text-muted fw-bold" style={{ fontSize: '10px' }}>{allProducts.length} PRODUCTS</div>
          </div>

          <div className="row g-3 g-md-4 mb-5">
            {allProducts.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <div className="product-card position-relative border-0 group overflow-hidden bg-white shadow-sm pb-3 h-100 d-flex flex-column">
                  
                  {/* Wishlist Heart Icon */}
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="position-absolute top-0 end-0 m-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center hover-scale"
                    style={{ width: '32px', height: '32px', zIndex: 10, transition: '0.3s' }}
                  >
                    <i className={`bi ${wishlist[product.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '15px' }}></i>
                  </button>

                  {/* Product Image Link */}
                  <Link to={`/item/${product.id}`} className="text-decoration-none">
                    <div className="overflow-hidden bg-light" style={{ height: '380px' }}>
                      <img 
                        src={product.img} 
                        className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-zoom" 
                        alt={product.name} 
                      />
                    </div>
                  </Link>

                  {/* Info Section */}
                  <div className="text-center pt-3 px-2 mt-auto">
                    <p className="text-muted mb-1 text-uppercase tracking-widest" style={{ fontSize: '9px', fontWeight: 'bold' }}>{product.category}</p>
                    <h6 className="text-uppercase mb-2 text-dark fw-semibold text-truncate" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                      {product.name}
                    </h6>
                    <p className="mb-3" style={{ fontSize: '13px' }}>
                      <span className="text-dark fw-bold">PKR {product.price}</span>
                    </p>
                    
                    {/* Add to Bag Button */}
                    <button 
                      onClick={() => addToBag(product)}
                      className="btn btn-dark rounded-0 w-100 py-2 text-uppercase tracking-widest font-bold shop-btn" 
                      style={{ fontSize: '10px' }}
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hover-zoom:hover { transform: scale(1.1); }
        .font-serif { font-family: 'Playfair Display', serif; }
        .product-card { transition: 0.3s ease-in-out; }
        .product-card:hover { box-shadow: 0 12px 30px rgba(0,0,0,0.08) !important; }
        .shop-btn { transition: 0.4s; border: 1px solid #000; }
        .shop-btn:hover { background-color: transparent !important; color: #000 !important; }
        .hover-link:hover { color: #000 !important; font-weight: bold; text-decoration: underline; }
        .hover-scale:hover { transform: scale(1.1); }
        @media (max-width: 768px) {
            .product-card img { height: 280px !important; }
            .overflow-hidden { height: 280px !important; }
        }
      `}</style>
    </div>
  );
}

export default ShopAll;