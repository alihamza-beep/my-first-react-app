import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LuxuryPret() {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 1. Sub-pages categories (Circles)
  const luxurySubCategories = [
    { name: "Zarish", path: "/luxury-pret/zarish", img: "/imgs/Luxury-pret.webp" },
    { name: "Zarqash", path: "/luxury-pret/zarqash", img: "/imgs/Rohani.webp" },
    { name: "Velvet Saga", path: "/luxury-pret/velvet-saga", img: "/imgs/Riwayat.webp" },
    { name: "Festive Wear", path: "/luxury-pret/festive-wear", img: "/imgs/Matching_Separates_1.webp" },
    { name: "Wedding Edition", path: "/luxury-pret/wedding-edition", img: "/imgs/New-in.webp" },
  ];

  // 2. Luxury Product Grid Data
  const imagesPool = [
    "/imgs/Luxury-pret.webp",
    "/imgs/Rohani.webp",
    "/imgs/Riwayat.webp",
    "/imgs/Mein_aur_ami.webp",
    "/imgs/New-in.webp"
  ];

  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 3000,
    name: i % 2 === 0 ? `Zarqash Velvet Edition ${i + 1}` : `Zarish Festive Suit ${i + 1}`,
    price: "15,900",
    img: imagesPool[i % imagesPool.length],
    tag: "HANDCRAFTED"
  }));

  const addToBag = (product) => {
    alert(`${product.name} added to your luxury bag!`);
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      {/* Header */}
      <div className="text-center mb-5 mt-4">
        <h2 className="fw-bold tracking-[0.4em] text-uppercase font-serif" style={{ fontSize: '32px' }}>Luxury Pret</h2>
        <div className="mx-auto bg-dark mt-2 mb-3" style={{ width: '60px', height: '1.5px' }}></div>
        <p className="text-muted text-uppercase tracking-[0.2em]" style={{ fontSize: '11px' }}>Timeless Elegance & Premium Craftsmanship</p>
      </div>

      {/* Category Circles Row */}
      <div className="d-flex justify-content-center gap-5 flex-wrap mb-5 pb-4 border-bottom">
        {luxurySubCategories.map((cat, index) => (
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

      {/* Product Grid Section */}
      <div className="row g-3 g-md-4 mb-5 mt-4">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-3">
            <div className="product-card position-relative border-0 group overflow-hidden bg-white h-100 d-flex flex-column shadow-sm pb-3">
              
              {/* Handcrafted Badge */}
              <span className="position-absolute top-0 start-0 bg-dark text-white px-3 py-1 m-2 fw-bold tracking-widest" style={{ fontSize: '8px', zIndex: 2 }}>
                {product.tag}
              </span>

              {/* Wishlist Heart Icon */}
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="position-absolute top-0 end-0 m-3 border-0 bg-transparent d-flex align-items-center justify-content-center hover-scale"
                style={{ zIndex: 10, transition: '0.3s' }}
              >
                <i className={`bi ${wishlist[product.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '20px' }}></i>
              </button>

              {/* Product Image Link */}
              <Link to={`/item/${product.id}`} className="text-decoration-none">
                <div className="overflow-hidden position-relative bg-light" style={{ height: '420px' }}>
                  <img 
                    src={product.img} 
                    className="w-100 h-100 object-fit-cover transition-transform duration-1000 hover-luxury-zoom" 
                    alt={product.name} 
                  />
                  <div className="luxury-overlay">
                    <span className="text-uppercase tracking-widest fw-bold" style={{ fontSize: '10px' }}>Explore Details</span>
                  </div>
                </div>
              </Link>

              {/* Info Section */}
              <div className="text-center pt-4 px-2 mt-auto">
                <h6 className="text-uppercase mb-2 text-dark fw-medium text-truncate" style={{ fontSize: '11px', letterSpacing: '1.5px' }}>
                  {product.name}
                </h6>
                <p className="mb-3" style={{ fontSize: '14px' }}>
                  <span className="text-dark fw-bold">PKR {product.price}</span>
                </p>
                
                {/* Add to Bag Button */}
                <button 
                  onClick={() => addToBag(product)}
                  className="btn btn-dark rounded-0 w-100 py-3 text-uppercase tracking-[0.2em] font-bold luxury-btn" 
                  style={{ fontSize: '9px' }}
                >
                  Move to Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .circle-item:hover img { border-color: #000 !important; transform: scale(1.08); transition: 0.4s ease; }
        .hover-luxury-zoom:hover { transform: scale(1.1); }
        .font-serif { font-family: 'Playfair Display', serif; }
        .product-card { transition: 0.4s ease; }
        .product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important; }
        
        .luxury-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: 0.4s;
        }
        .group:hover .luxury-overlay { opacity: 1; }
        
        .luxury-btn { transition: 0.4s ease; border: 1px solid #1a1a1a; }
        .luxury-btn:hover { background-color: transparent !important; color: #1a1a1a !important; letter-spacing: 3px !important; }
        .hover-scale:hover { transform: scale(1.2); }

        @media (max-width: 768px) {
            .overflow-hidden { height: 300px !important; }
            .luxury-overlay { display: none; }
        }
      `}</style>
    </div>
  );
}

export default LuxuryPret;