import React from 'react';

export default function TrackOrder() {
  return (
    <div className="container py-5 mt-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>CONCIERGE (TRACKING)</h2>
      <div className="card p-4 shadow-sm border-0" style={{ maxWidth: '400px', width: '100%' }}>
        <label className="form-label small font-bold">ORDER NUMBER</label>
        <input type="text" className="form-control mb-3 rounded-0" placeholder="e.g. #AH-12345" />
        <button className="btn btn-dark w-100 rounded-0 tracking-widest font-bold py-2">TRACK LEGACY</button>
      </div>
    </div>
  );
}