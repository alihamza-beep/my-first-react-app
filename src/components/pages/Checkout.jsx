import React from 'react';

export default function Checkout() {
  return (
    <div className="container py-5 mt-5" style={{ minHeight: '80vh' }}>
      <h2 className="text-center mb-5 pt-4" style={{ fontFamily: 'Playfair Display, serif' }}>SECURE CHECKOUT</h2>
      <div className="row g-5">
        <div className="col-lg-7">
          <h5 className="mb-4 font-bold border-bottom pb-2 uppercase tracking-wider">Shipping Details</h5>
          <div className="row g-3">
             <div className="col-12"><input type="text" className="form-control rounded-0" placeholder="Full Name" /></div>
             <div className="col-12"><input type="email" className="form-control rounded-0" placeholder="Email Address" /></div>
             <div className="col-12"><textarea className="form-control rounded-0" rows="3" placeholder="Shipping Address"></textarea></div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="p-4 bg-light border border-dark">
            <h5 className="font-bold mb-4">ORDER SUMMARY</h5>
            <div className="d-flex justify-content-between mb-2"><span>Subtotal</span><span>Rs. 0.00</span></div>
            <div className="d-flex justify-content-between border-top pt-2 mt-2 font-bold"><span>Total</span><span>Rs. 0.00</span></div>
            <button className="btn btn-dark w-100 mt-4 rounded-0 py-2">COMPLETE PURCHASE</button>
          </div>
        </div>
      </div>
    </div>
  );
}