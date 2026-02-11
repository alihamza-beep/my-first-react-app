import React from 'react';

export default function Assistance() {
  return (
    <div className="container py-5 mt-5" style={{ minHeight: '80vh' }}>
      <div className="text-center mb-5 pt-4">
        <h2 style={{ fontFamily: 'Playfair Display, serif' }}>CLIENT ASSISTANCE</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <p className="lead text-muted mb-5">How can we assist you with your Alza Hamza experience?</p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <div className="p-4 border border-light bg-white shadow-sm w-100">
              <h5 className="font-bold">EXCHANGES</h5>
              <p className="small text-muted">Complimentary exchanges within 7 days.</p>
            </div>
            <div className="p-4 border border-light bg-white shadow-sm w-100">
              <h5 className="font-bold">CARE</h5>
              <p className="small text-muted">Learn how to preserve your artisanal pieces.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}