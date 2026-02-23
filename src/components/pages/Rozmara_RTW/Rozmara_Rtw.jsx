import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RozmaraRtw() {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 1. Rozmara RTW Sub-categories (Circles)
  const rtwSubCategories = [
    { name: "Solids", path: "/rozmara-rtw/solids", img: "/imgs/Matching_Separates_1.webp" },
    { name: "Prints", path: "/rozmara-rtw/prints", img: "/imgs/Prints_1.webp" },
    { name: "Embroidered", path: "/rozmara-rtw/embroidered", img: "/imgs/Riwayat.webp" },
    { name: "Khaddar", path: "/rozmara-rtw/khaddar", img: "/imgs/Rohani.webp" },
    { name: "Fusion Pop", path: "/rozmara-rtw/fusion-pop", img: "/imgs/New-in.webp" },
  ];

  // 2. Product Grid Logic
  const imagesPool = [
    "/imgs/Prints_1.webp",
    "/imgs/Matching_Separates_1.webp",
    "/imgs/Rohani.webp",
    "/imgs/Riwayat.webp",
    "/imgs/New-in.webp"
  ];

  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: `rtw-${i}`,
    name: `Daily Wear Article ${i + 1}`,
    price: "4,500",
    img: imagesPool[i % imagesPool.length],
    tag: "EVERYDAY"
  }));

  const addToBag = (product) => {
    alert(`${product.name} added to bag!`);
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      {/* Header Section */}
      <div className="text-center mb-5 mt-4">
        <h2 className="fw-bold tracking-[0.4em] text-uppercase font-serif" style={{ fontSize: '32px' }}>Rozmara RTW</h2>
        <div className="mx-auto bg-dark mt-2 mb-3" style={{ width: '60px', height: '1.5px' }}></div>
        <p className="text-muted text-uppercase tracking-[0.2em]" style={{ fontSize: '11px' }}>Elevate Your Everyday Style</p>
      </div>

      {/* Category Circles Row (Professional Sub-navigation) */}
      <div className="d-flex justify-content-center gap-5 flex-wrap mb-5 pb-4 border-bottom">
        {rtwSubCategories.map((cat, index) => (
          <Link key={index} to={cat.path} className="text-decoration-none text-dark text-center circle-item" style={{ width: '130px' }}>
            <div className="position-relative mx-auto mb-3" style={{ width: '110px', height: '110px' }}>
              <img 
                src={cat.img} 
                className="rounded-circle w-100 h-100 shadow-md" 
                style={{ objectFit: 'cover', border: '3px solid #fff', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
                alt={cat.name} 
              />
            </div>
            <p className="fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>{cat.name}</p>
          </Link>
        ))}
      </div>

      {/* Main Product Grid */}
      <div className="row g-3 g-md-4 mb-5">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-3">
            <div className="product-card position-relative border-0 group overflow-hidden bg-white h-100 d-flex flex-column shadow-sm pb-3">
              
              {/* Everyday Badge */}
              <span className="position-absolute top-0 start-0 bg-dark text-white px-3 py-1 m-2 fw-bold tracking-widest" style={{ fontSize: '8px', zIndex: 2 }}>
                {product.tag}
              </span>

              {/* Wishlist Heart Icon (Your Favorite Circle Style) */}
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
                    className="w-100 h-100 object-fit-cover transition-transform duration-1000 hover-zoom" 
                    alt={product.name} 
                  />
                </div>
              </Link>

              {/* Info Section */}
              <div className="text-center pt-3 px-2 mt-auto">
                <h6 className="text-uppercase mb-1 text-dark fw-medium text-truncate" style={{ fontSize: '11px', letterSpacing: '1.2px' }}>
                  {product.name}
                </h6>
                <p className="mb-3" style={{ fontSize: '14px' }}>
                  <span className="text-dark fw-bold">PKR {product.price}</span>
                </p>
                
                {/* Add to Bag Button */}
                <button 
                  onClick={() => addToBag(product)}
                  className="btn btn-dark rounded-0 w-100 py-2 text-uppercase tracking-widest font-bold sale-btn" 
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
        .circle-item:hover img { border-color: #000 !important; transform: scale(1.08); transition: 0.4s ease; }
        .hover-zoom:hover { transform: scale(1.1); }
        .font-serif { font-family: 'Playfair Display', serif; }
        .product-card { transition: 0.3s ease-in-out; }
        .product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important; }
        .sale-btn { transition: 0.4s; border: 1px solid #000; }
        .sale-btn:hover { background-color: transparent !important; color: #000 !important; letter-spacing: 2px !important; }
        @media (max-width: 768px) {
            .overflow-hidden { height: 320px !important; }
        }
      `}</style>
    </div>
  );
}

export default RozmaraRtw;