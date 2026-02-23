import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

function KidsSubPage({ title = "Every Day" }) {
  const [wishlist, setWishlist] = useState({});
  const [sortBy, setSortBy] = useState("featured");

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Professional images pool for Everyday/Western Kids Wear
  const imagesPool = [
    "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=400",
    "https://images.unsplash.com/photo-1519278477974-bc7076f62144?q=80&w=400",
    "https://images.unsplash.com/photo-1503919919749-646740628373?q=80&w=400",
    "https://images.unsplash.com/photo-1621244249243-437b49c5aad9?q=80&w=400"
  ];

  // Generating products dynamically for the Every Day collection
  const initialProducts = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    id: `kids-everyday-${i}`,
    name: `Every Day - Casual Art ${i + 1}`,
    price: 2450 + (i * 150), 
    img: imagesPool[i % imagesPool.length]
  })), []);

  // Sorting logic based on price
  const sortedProducts = useMemo(() => {
    let tempProducts = [...initialProducts];
    if (sortBy === "low") tempProducts.sort((a, b) => a.price - b.price);
    if (sortBy === "high") tempProducts.sort((a, b) => b.price - a.price);
    return tempProducts;
  }, [sortBy, initialProducts]);

  const addToBag = (product) => {
    alert(`${product.name} added to bag!`);
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      {/* Dynamic Luxury Header - Set to Every Day */}
      <div className="text-center mb-4 mt-4">
        <h2 className="fw-bold tracking-[0.4em] text-uppercase font-serif text-dark" style={{ fontSize: '28px' }}>{title}</h2>
        <div className="mx-auto bg-dark mt-2 mb-2" style={{ width: '40px', height: '2px' }}></div>
        <p className="text-muted small text-uppercase tracking-widest" style={{ fontSize: '10px' }}>Kids Collection / Western / {title}</p>
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
            <option value="featured">New Arrivals</option>
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
              
              {/* White Circle Wishlist Heart */}
              <button 
                onClick={() => toggleWishlist(p.id)}
                className="position-absolute top-0 end-0 m-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px', zIndex: 10, transition: '0.3s' }}
              >
                <i className={`bi ${wishlist[p.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '16px' }}></i>
              </button>

              <Link to={`/item/${p.id}`} className="text-decoration-none">
                <div className="overflow-hidden position-relative" style={{ height: '380px' }}>
                  <img 
                    src={p.img} 
                    className="w-100 h-100 object-fit-cover transition-transform duration-1000 hover-zoom" 
                    alt={p.name} 
                  />
                  <div className="position-absolute bottom-0 start-0 m-2 px-2 py-1 bg-white opacity-75 fw-bold" style={{ fontSize: '8px', letterSpacing: '1px' }}>
                    WESTERN WEAR
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
        .hover-zoom:hover { transform: scale(1.1); }
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

export default KidsSubPage;