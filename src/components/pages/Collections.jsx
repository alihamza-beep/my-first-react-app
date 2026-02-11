import React from 'react';

export default function Collections({ title }) {
  return (
    <div className="container-fluid px-4 py-5 mt-5" style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <div className="text-center mb-5 pt-5">
        <span className="text-muted small tracking-widest uppercase">The Heritage</span>
        <h1 className="display-4 font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-1px' }}>
          {title}
        </h1>
        <div className="mx-auto mt-3" style={{ width: '40px', height: '2px', backgroundColor: '#000' }}></div>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Yahan aapka Product Grid aayega */}
        <p className="text-center text-muted fst-italic">Our artisanal collection is being curated. Stay tuned.</p>
      </div>
    </div>
  );
}