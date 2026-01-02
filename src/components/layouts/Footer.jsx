import React from 'react';
import { Link } from 'react-router-dom'; // Functional links ke liye

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-muted mt-5 w-100 border-top pt-5">
      {/* 1. Main Footer Links Area */}
      <section className="container py-5">
        <div className="row text-center text-md-start">
          
          {/* Brand Logo & Description */}
          <div className="col-12 col-md-3 col-lg-4 mb-4">
            <h2 className="fw-bold mb-4" style={{ 
              fontFamily: 'Times New Roman, serif', 
              letterSpacing: '4px', 
              color: '#000' 
            }}>
              ALZA HMZA
            </h2>
            <p style={{ fontSize: '14px', lineHeight: '1.8' }}>
              Your one-stop destination for premium fashion. We bring you the latest 
              trends with a touch of elegance and quality.
            </p>
          </div>

          {/* Products Column */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 text-dark">Products</h6>
            <ul className="list-unstyled" style={{ fontSize: '14px' }}>
              <li className="mb-2"><Link to="/category/women" className="text-reset text-decoration-none hover-link">Women</Link></li>
              <li className="mb-2"><Link to="/category/men" className="text-reset text-decoration-none hover-link">Men</Link></li>
              <li className="mb-2"><Link to="/category/kids" className="text-reset text-decoration-none hover-link">Kids</Link></li>
              <li className="mb-2"><Link to="/category/accessories" className="text-reset text-decoration-none hover-link">Accessories</Link></li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 text-dark">Useful Links</h6>
            <ul className="list-unstyled" style={{ fontSize: '14px' }}>
              <li className="mb-2"><Link to="/about" className="text-reset text-decoration-none hover-link">About Us</Link></li>
              <li className="mb-2"><Link to="/view-all" className="text-reset text-decoration-none hover-link">Orders</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-reset text-decoration-none hover-link">Help</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-reset text-decoration-none hover-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 text-dark">Contact</h6>
            <ul className="list-unstyled" style={{ fontSize: '14px' }}>
              <li className="mb-2"><i className="bi bi-house-door me-2"></i> Karachi, Pakistan</li>
              <li className="mb-2"><i className="bi bi-envelope me-2"></i> info@alzahmza.com</li>
              <li className="mb-2"><i className="bi bi-telephone me-2"></i> +92 300 1234567</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Social Media & Copyright Area */}
      <div className="text-center p-4 border-top bg-light text-dark">
        <div className="mb-3">
          {/* Real links yahan add kar saktay hain */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="me-4 text-dark fs-5 social-icon"><i className="bi bi-facebook"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="me-4 text-dark fs-5 social-icon"><i className="bi bi-instagram"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="me-4 text-dark fs-5 social-icon"><i className="bi bi-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="me-4 text-dark fs-5 social-icon"><i className="bi bi-linkedin"></i></a>
        </div>
        <p className="m-0" style={{ fontSize: '13px' }}>
          © {currentYear} <strong>ALZA HMZA</strong> — All Rights Reserved
        </p>
      </div>

      {/* Hover Effects CSS */}
      <style>{`
        .hover-link:hover {
          color: #dc3545 !important; /* Red hover color */
          transition: 0.3s;
        }
        .social-icon:hover {
          color: #dc3545 !important;
          transform: scale(1.2);
          display: inline-block;
          transition: 0.3s;
        }
      `}</style>
    </footer>
  );
}