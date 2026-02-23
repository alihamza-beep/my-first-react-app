import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

function Kids() {
  const [wishlist, setWishlist] = useState({});
  const [sortBy, setSortBy] = useState("featured");

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Professional sub-categories (Simplified to Eastern & Western)
  const kidsSubPages = [
    // Eastern Categories
    { name: "Silky Smiles", path: "/kids/silky-smiles", img: "https://images.unsplash.com/photo-1519235106638-30cc58032644?q=80&w=200" },
    { name: "Basics", path: "/kids/basics", img: "https://images.unsplash.com/photo-1621244249243-437b49c5aad9?q=80&w=200" },
    { name: "Formals", path: "/kids/formals", img: "/imgs/Riwayat.webp" },
    // Western Categories
    { name: "Every Day", path: "/kids/every-day", img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=200" },
    { name: "Tops", path: "/kids/tops", img: "/imgs/Matching_Separates_1.webp" }
  ];

  const imagesPool = [
    "https://images.unsplash.com/photo-1519235106638-30cc58032644?q=80&w=400",
    "https://images.unsplash.com/photo-1621244249243-437b49c5aad9?q=80&w=400",
    "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=400"
  ];

  const initialProducts = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    id: `kids-item-${i}`,
    name: `Kids Luxe Edition Art ${i + 1}`,
    price: 3500 + (i * 250),
    img: imagesPool[i % imagesPool.length]
  })), []);

  const sortedProducts = useMemo(() => {
    let temp = [...initialProducts];
    if (sortBy === "low") temp.sort((a, b) => a.price - b.price);
    if (sortBy === "high") temp.sort((a, b) => b.price - a.price);
    return temp;
  }, [sortBy, initialProducts]);

  return (
    <div className="container-fluid px-4 mt-2 pt-2 bg-white">
      {/* Premium Dynamic Header */}
      <div className="text-center mb-5 mt-4">
        <h2 className="fw-bold tracking-[0.5em] text-uppercase font-serif" style={{ fontSize: '28px' }}>KIDS COLLECTION</h2>
        <div className="mx-auto bg-dark mt-2 mb-3" style={{ width: '50px', height: '1.5px' }}></div>
        <p className="text-muted small text-uppercase tracking-[0.3em]" style={{ fontSize: '10px' }}>Exquisite Eastern & Western Wear</p>
      </div>

      {/* --- CIRCLE NAVIGATION (Accessories Removed) --- */}
      <div className="d-flex justify-content-center gap-4 gap-md-5 flex-wrap mb-5 pb-5 border-bottom">
        {kidsSubPages.map((cat, index) => (
          <Link key={index} to={cat.path} className="text-decoration-none text-dark text-center circle-item" style={{ width: '100px' }}>
            <div className="position-relative mx-auto mb-3 circle-wrapper">
              <img 
                src={cat.img} 
                className="rounded-circle w-100 h-100 shadow-sm category-img" 
                style={{ objectFit: 'cover', border: '1px solid #eee' }} 
                alt={cat.name} 
              />
            </div>
            <p className={`fw-semibold text-uppercase mb-0 ${cat.name === "Silky Smiles" ? "text-danger" : ""}`} style={{ fontSize: '9px', letterSpacing: '1.5px' }}>
              {cat.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Sort & Filter Bar */}
      <div className="d-flex justify-content-between align-items-center py-3 mb-4 border-top border-bottom">
        <div className="text-uppercase fw-bold text-muted tracking-widest" style={{ fontSize: '10px' }}>
          {sortedProducts.length} Articles Found
        </div>
        <div className="d-flex align-items-center">
          <span className="me-2 d-none d-md-block text-muted" style={{ fontSize: '11px' }}>Sort by:</span>
          <select 
            className="border-0 bg-transparent text-uppercase fw-bold" 
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
            <div className="product-card position-relative border-0 group overflow-hidden bg-white h-100 d-flex flex-column">
              
              {/* White Circle Wishlist */}
              <button 
                onClick={() => toggleWishlist(p.id)} 
                className="position-absolute top-0 end-0 m-3 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center wishlist-btn" 
                style={{ width: '32px', height: '32px', zIndex: 10 }}
              >
                <i className={`bi ${wishlist[p.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '15px' }}></i>
              </button>

              <Link to={`/item/${p.id}`} className="text-decoration-none">
                <div className="overflow-hidden position-relative mb-3" style={{ height: '400px' }}>
                  <img src={p.img} className="w-100 h-100 object-fit-cover transition-transform duration-1000 hover-luxury-zoom" alt={p.name} />
                  <div className="position-absolute bottom-0 start-0 m-2 px-2 py-1 bg-white opacity-75 fw-bold" style={{ fontSize: '8px', letterSpacing: '1px' }}>
                    KIDS LUXE
                  </div>
                </div>
              </Link>

              <div className="text-center px-2 mt-auto pb-3">
                <h6 className="text-uppercase mb-1 text-dark fw-medium text-truncate" style={{ fontSize: '11px', letterSpacing: '1px' }}>{p.name}</h6>
                <p className="mb-3 text-dark fw-bold" style={{ fontSize: '14px' }}>PKR {p.price.toLocaleString()}</p>
                <button 
                  className="btn btn-dark rounded-0 w-100 py-2 text-uppercase tracking-widest font-bold luxury-add-btn" 
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
        .circle-wrapper { width: 95px; height: 95px; transition: 0.4s ease; padding: 2px; border: 1px solid transparent; border-radius: 50%; }
        .circle-item:hover .circle-wrapper { border-color: #000; transform: translateY(-5px); }
        .hover-luxury-zoom:hover { transform: scale(1.1); }
        .font-serif { font-family: 'Playfair Display', serif; }
        .luxury-add-btn { transition: 0.4s; border: 1px solid #000; }
        .luxury-add-btn:hover { background-color: transparent !important; color: #000 !important; letter-spacing: 2px !important; }
        .wishlist-btn { transition: 0.3s ease; }
        .wishlist-btn:hover { transform: scale(1.1); }
        @media (max-width: 768px) {
            .overflow-hidden { height: 320px !important; }
            .circle-wrapper { width: 80px; height: 80px; }
        }
      `}</style>
    </div>
  );
}

export default Kids;