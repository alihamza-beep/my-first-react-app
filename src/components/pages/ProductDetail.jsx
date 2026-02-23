import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = () => {
      const data = {
        id: id,
        name: id && id.includes('bag') ? "Luxury Handbag" : "2PC - Crepe Silk Suit",
        originalPrice: 8595,
        discountedPrice: 5157,
        discountTag: "40% OFF",
        sku: `SKU-${id || '001'}`,
        fabric: "Premium Crepe Silk",
        color: "Beige",
        technique: "Embroidered",
        mainImg: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600",
        sideImg: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600",
      };
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  // Related Products Data
  const relatedProducts = [
    { id: '1', name: 'Mustard Festive', price: 5157, img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=300' },
    { id: '2', name: 'Navy Embroidered', price: 4200, img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=300' },
    { id: '3', name: 'Velvet Saga Black', price: 6500, img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=300' },
    { id: '4', name: 'Royal Blue Silk', price: 5157, img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=300' },
  ];

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container-fluid px-md-5 mt-5 pt-5 bg-white">
      <nav className="mb-4 small text-muted">Home &gt; SALE &gt; {product.name}</nav>

      <div className="row g-4">
        {/* Product Images Section */}
        <div className="col-lg-7">
          <div className="row g-2">
            <div className="col-6 position-relative">
              <span className="position-absolute top-0 end-0 m-3 badge bg-danger rounded-0 p-2" style={{ zIndex: 1 }}>{product.discountTag}</span>
              <img src={product.mainImg} className="img-fluid w-100 shadow-sm" alt="front" />
            </div>
            <div className="col-6">
              <img src={product.sideImg} className="img-fluid w-100 shadow-sm" alt="side" />
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="col-lg-5 ps-lg-5">
          <h2 className="fw-bold mb-1 text-uppercase">{product.name}</h2>
          <div className="mb-3">
            <span className="text-muted text-decoration-line-through me-2">PKR {product.originalPrice}</span>
            <span className="text-danger fw-bold fs-5">PKR {product.discountedPrice}</span>
          </div>
          <p className="small text-muted mb-4">SKU: {product.sku}</p>

          <div className="mb-4">
            <span className="fw-bold small d-block mb-2 text-uppercase">Size: {selectedSize}</span>
            <div className="d-flex gap-2">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button key={size} onClick={() => setSelectedSize(size)} className={`btn rounded-0 border px-4 py-2 ${selectedSize === size ? 'bg-dark text-white' : 'bg-white text-dark'}`}>{size}</button>
              ))}
            </div>
          </div>

          <div className="d-flex gap-2 mb-4">
            <div className="input-group border rounded-0" style={{ width: '120px' }}>
              <button className="btn border-0" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input type="text" className="form-control border-0 text-center bg-transparent" value={quantity} readOnly />
              <button className="btn border-0" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="btn btn-dark rounded-0 flex-grow-1 text-uppercase fw-bold py-3 tracking-[2px]">ADD TO CART</button>
          </div>

          {/* Description & Fit Info */}
          <div className="border-top pt-4">
            <h6 className="fw-bold text-uppercase border-bottom pb-2 d-inline-block">Description</h6>
            <div className="small text-muted lh-lg">
              <p className="mb-1"><strong>Package Includes:</strong> Shirt with trouser</p>
              <p className="mb-1"><strong>Fabric:</strong> {product.fabric}</p>
              <p className="mb-1"><strong>Model Height:</strong> 5 feet, 7 inches</p>
              <p className="mb-1"><strong>Model Wearing:</strong> Small</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- YOU MAY ALSO LIKE SECTION --- */}
      <div className="mt-5 pt-5 mb-5">
        <div className="text-center mb-5">
          <h3 className="fw-bold tracking-[4px] text-uppercase" style={{ fontSize: '20px' }}>You May Also Like</h3>
          <div className="mx-auto bg-dark mt-2" style={{ width: '50px', height: '1.5px' }}></div>
        </div>

        <div className="row g-3">
          {relatedProducts.map((rp) => (
            <div key={rp.id} className="col-6 col-md-3">
              <div className="product-card position-relative border-0 group overflow-hidden bg-white shadow-sm pb-3">
                {/* 40% OFF Badge */}
                <span className="position-absolute top-0 end-0 m-2 badge bg-danger rounded-0 p-1" style={{ zIndex: 5, fontSize: '10px' }}>40% OFF</span>
                
                <div className="overflow-hidden" style={{ height: '350px' }}>
                  <img src={rp.img} className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-zoom" alt={rp.name} />
                </div>
                <div className="text-center pt-3 px-2">
                  <h6 className="text-uppercase mb-1 text-dark" style={{ fontSize: '11px', letterSpacing: '1px' }}>{rp.name}</h6>
                  <p className="text-dark fw-bold" style={{ fontSize: '13px' }}>PKR {rp.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hover-zoom:hover { transform: scale(1.05); }
        .product-card { transition: 0.3s ease; }
        .product-card:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
        @media (max-width: 768px) { .overflow-hidden { height: 250px !important; } }
      `}</style>
    </div>
  );
}

export default ProductDetail;