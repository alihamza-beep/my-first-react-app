import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sale() {
  // Wishlist handle karne ke liye state
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 1. Discount Circles Data
  const discountCircles = [
    { name: "Clearance Sale", path: "/sale/clearance", img: "/imgs/sale1.avif" },
    { name: "Flat 20% Off", path: "/sale/flat20", img: "/imgs/sale2.avif" },
    { name: "Flat 30% Off", path: "/sale/flat30", img: "/imgs/sale3.avif" },
    { name: "Flat 50% Off", path: "/sale/flat50", img: "/imgs/sale4.avif" },
    { name: "Last Chance", path: "/sale/last-chance", img: "/imgs/sale5.avif" },
  ];

  // 2. Product Grid Data (Easy to make dynamic later)
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

  const saleProducts = Array.from({ length: 40 }).map((_, index) => ({
    id: index + 1,
    name: `Sale Item ${index + 1}`,
    price: "3,500",
    oldPrice: "7,000",
    discount: "50% OFF",
    img: imagesPool[index % imagesPool.length]
  }));

  // 3. Add to Cart Function
  const addToCart = (product) => {
    console.log("Added to cart:", product.name);
    alert(`${product.name} added to bag!`); 
  };

  return (
    <div className="container-fluid px-4 mt-2 pt-2">
      {/* Header with Title */}
      <div className="text-center mb-4 mt-3">
        <h2 className="fw-bold tracking-[0.3em] text-uppercase font-serif" style={{ fontSize: '28px' }}>SALE</h2>
        <div className="mx-auto bg-danger mt-1" style={{ width: '50px', height: '2.5px' }}></div>
      </div>
      
      {/* Larger Discount Circles Row */}
      <div className="d-flex justify-content-center gap-5 flex-wrap mb-5 pb-4 border-bottom">
        {discountCircles.map((circle, index) => (
          <Link key={index} to={circle.path} className="text-decoration-none text-dark text-center circle-item" style={{ width: '140px' }}>
            <div className="position-relative mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
              <img 
                src={circle.img} 
                className="rounded-circle w-100 h-100 shadow-md" 
                style={{ objectFit: 'cover', border: '3px solid #fff', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
                alt={circle.name} 
              />
            </div>
            <p className="fw-bold text-uppercase" style={{ fontSize: '11px', letterSpacing: '1px' }}>{circle.name}</p>
          </Link>
        ))}
      </div>

      {/* Filter & Breadcrumb Bar */}
      <div className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
        <div className="text-uppercase fw-bold" style={{ fontSize: '12px', cursor: 'pointer' }}>
          <i className="bi bi-sliders me-2"></i> Filter
        </div>
        <div className="d-none d-md-block" style={{ fontSize: '11px', color: '#999', letterSpacing: '1px' }}>HOME &gt; SALE</div>
        <div className="d-flex align-items-center">
          <span className="me-2 d-none d-md-block" style={{ fontSize: '12px' }}>Sort by:</span>
          <select className="border-0 bg-transparent text-uppercase fw-semibold" style={{ fontSize: '11px', outline: 'none' }}>
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-3 g-md-4 mb-5">
        {saleProducts.map((product) => (
          <div key={product.id} className="col-6 col-md-3">
            <div className="product-card position-relative border-0 group overflow-hidden bg-white shadow-sm pb-3">
              {/* Discount Badge */}
              <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 m-2 fw-bold" style={{ fontSize: '9px', zIndex: 2 }}>
                {product.discount}
              </span>

              {/* --- WISHLIST HEART ICON (Added) --- */}
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="position-absolute top-0 end-0 m-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px', zIndex: 10, transition: '0.3s' }}
              >
                <i className={`bi ${wishlist[product.id] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`} style={{ fontSize: '16px' }}></i>
              </button>
              
              {/* Product Image Link */}
              <Link to={`/item/${product.id}`} className="text-decoration-none">
                <div className="overflow-hidden bg-light" style={{ height: '380px' }}>
                  <img 
                    src={product.img} 
                    className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-zoom" 
                    alt={product.name} 
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="text-center pt-3 pb-2 px-1">
                <p className="text-uppercase mb-1 text-dark fw-semibold" style={{ fontSize: '11px', letterSpacing: '1.5px' }}>{product.name}</p>
                <p className="mb-2" style={{ fontSize: '13px' }}>
                  <span className="text-danger fw-bold me-2">PKR {product.price}</span>
                  <span className="text-muted text-decoration-line-through" style={{ fontSize: '11px' }}>PKR {product.oldPrice}</span>
                </p>
                
                {/* ADD TO CART BUTTON */}
                <button 
                  onClick={() => addToCart(product)}
                  className="btn btn-dark rounded-0 w-75 py-2 text-uppercase tracking-widest font-bold" 
                  style={{ fontSize: '10px', transition: '0.3s' }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .circle-item:hover img {
          border-color: #dc3545 !important;
          transform: scale(1.08);
          transition: 0.4s ease;
        }
        .hover-zoom:hover {
          transform: scale(1.1);
          transition: transform 0.6s ease;
        }
        .product-card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          transition: 0.3s ease;
        }
        .btn-dark:hover {
          background-color: #333 !important;
          letter-spacing: 2px !important;
        }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}

export default Sale;