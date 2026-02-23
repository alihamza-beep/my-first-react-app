import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

function Accessories() {
  const [wishlist, setWishlist] = useState({});
  const [sortBy, setSortBy] = useState("featured");

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 1. All Sub-categories from your image
  const accCategories = [
    { name: "Bags", path: "/accessories/bags", img: "https://images.unsplash.com/photo-1584917089215-991f4cb7bb2e?q=80&w=400" },
    { name: "Jewelry", path: "/accessories/jewelry", img: "https://images.unsplash.com/photo-1535633302704-b02f4f122712?q=80&w=400" },
    { name: "Stoles", path: "/accessories/stoles", img: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=400" },
    { name: "Fragrances", path: "/accessories/fragrances", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400" },
    { name: "Shoes", path: "/accessories/shoes", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400" },
  ];

  const imagesPool = [
    "https://images.unsplash.com/photo-1584917089215-991f4cb7bb2e?q=80&w=400",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400",
    "https://images.unsplash.com/photo-1535633302704-b02f4f122712?q=80&w=400",
    "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=400"
  ];

  const initialProducts = useMemo(() => Array.from({ length: 8 }).map((_, i) => ({
    id: `acc-${i}`,
    name: i % 2 === 0 ? `Luxury Handbag Ed. ${i + 1}` : `Signature Fragrance ${i + 1}`,
    price: i % 2 === 0 ? 8500 : 4500,
    img: imagesPool[i % imagesPool.length],
    category: i % 2 === 0 ? "Premium" : "Signature"
  })), []);

  const sortedProducts = useMemo(() => {
    let temp = [...initialProducts];
    if (sortBy === "low") temp.sort((a, b) => a.price - b.price);
    if (sortBy === "high") temp.sort((a, b) => b.price - a.price);
    return temp;
  }, [sortBy, initialProducts]);

  const addToBag = (product) => {
    alert(`${product.name} added to bag!`);
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      {/* Premium Header */}
      <div className="text-center mb-5 mt-4">
        <h2 className="fw-bold tracking-[0.4em] text-uppercase font-serif" style={{ fontSize: '32px' }}>ACCESSORIES</h2>
        <div className="mx-auto bg-dark mt-2 mb-3" style={{ width: '60px', height: '1.5px' }}></div>
        <p className="text-muted text-uppercase tracking-[0.2em]" style={{ fontSize: '11px' }}>Signature Collection</p>
      </div>

      {/* --- ALL SUB-PAGE CIRCLES (From your request) --- */}
      <div className="d-flex justify-content-center gap-4 gap-md-5 flex-wrap mb-5 pb-4 border-bottom">
        {accCategories.map((cat, index) => (
          <Link key={index} to={cat.path} className="text-decoration-none text-dark text-center circle-item" style={{ width: '120px' }}>
            <div className="position-relative mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
              <img 
                src={cat.img} 
                className="rounded-circle w-100 h-100 shadow-md transition-all duration-500 hover:rotate-3" 
                style={{ objectFit: 'cover', border: '3px solid #fff', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
                alt={cat.name} 
              />
            </div>
            <p className="fw-bold text-uppercase mb-0" style={{ fontSize: '10px', letterSpacing: '1px' }}>{cat.name}</p>
          </Link>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="d-flex justify-content-between align-items-center py-3 mb-4 border-top border-bottom">
        <div className="text-uppercase fw-bold text-muted" style={{ fontSize: '11px' }}>
          {sortedProducts.length} Items Found
        </div>
        <div className="d-flex align-items-center">
          <span className="me-2 d-none d-md-block" style={{ fontSize: '12px' }}>Sort by:</span>
          <select 
            className="border-0 bg-transparent text-uppercase fw-semibold" 
            style={{ fontSize: '11px', outline: 'none', cursor: 'pointer' }}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-3 g-md-4 mb-5">
        {sortedProducts.map((p) => (
          <div key={p.id} className="col-6 col-md-3">
            <div className="product-card position-relative border-0 group overflow-hidden bg-white h-100 d-flex flex-column shadow-sm pb-3">
              
              {/* White Circle Wishlist Heart */}
              <button 
                onClick={() => toggleWishlist(p.id)}
                className="position-absolute top-0 end-0 m-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px', zIndex: 10, transition: '0.3s' }}
              >
                <i className={`bi ${wishlist[p.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '16px' }}></i>
              </button>

              <Link to={`/item/${p.id}`} className="text-decoration-none">
                <div className="overflow-hidden position-relative" style={{ height: '350px' }}>
                  <img src={p.img} className="w-100 h-100 object-fit-cover transition-transform duration-1000 hover-zoom" alt={p.name} />
                </div>
              </Link>

              <div className="text-center pt-3 px-2 mt-auto">
                <h6 className="text-uppercase mb-1 text-dark fw-medium text-truncate" style={{ fontSize: '11px', letterSpacing: '1px' }}>{p.name}</h6>
                <p className="mb-3 text-dark fw-bold">PKR {p.price.toLocaleString()}</p>
                <button 
                  onClick={() => addToBag(p)}
                  className="btn btn-dark rounded-0 w-100 py-2 text-uppercase tracking-widest luxury-btn" 
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
        .circle-item:hover img { border-color: #000 !important; transform: scale(1.1); }
        .hover-zoom:hover { transform: scale(1.1); }
        .font-serif { font-family: 'Playfair Display', serif; }
        .luxury-btn { transition: 0.4s; border: 1px solid #000; }
        .luxury-btn:hover { background-color: transparent !important; color: #000 !important; }
        @media (max-width: 768px) {
            .overflow-hidden { height: 260px !important; }
        }
      `}</style>
    </div>
  );
}

export default Accessories;