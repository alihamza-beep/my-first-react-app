import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
  const siteConfig = {
    brandName: "ALZA HMZA",
    email: "customercare@alzahmza.com",
    address: "Plot 123, Fashion Avenue, Phase 6, DHA, Karachi",
    socials: {
      facebook: "https://facebook.com/alzahmza",
      instagram: "https://instagram.com/alzahmza",
      tiktok: "https://tiktok.com/@alzahmza",
      whatsapp: "https://wa.me/923001234567"
    }
  };

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatus("Subscribing...");
    setTimeout(() => {
      setStatus("Welcome to the inner circle!");
      setEmail("");
    }, 2000);
  };

  return (
    <footer className="bg-white text-dark mt-5 pt-2 border-top">
      
      {/* 1. Minimalist Newsletter - High Conversion Layout */}
      <div className="newsletter-wrap py-5 mb-5" style={{ background: '#fafafa' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <span className="text-muted x-small tracking-widest mb-2 d-block">ESTABLISHED 2026</span>
              <h2 className="luxury-heading mb-4">Elevate Your Lifestyle</h2>
              <form onSubmit={handleSubscribe} className="position-relative">
                <div className="d-flex border-bottom border-dark pb-2 mt-4">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control border-0 bg-transparent rounded-0 shadow-none ps-0" 
                    placeholder="ENTER YOUR EMAIL FOR UPDATES" 
                    style={{ fontSize: '12px', letterSpacing: '1px' }}
                  />
                  <button type="submit" className="btn border-0 fw-bold x-small tracking-widest">JOIN</button>
                </div>
                {status && <span className="small text-success mt-2 d-block fade-in italic">{status}</span>}
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="container pb-5">
        <div className="row g-5 justify-content-between">
          
          {/* Brand Identity & Philosophy */}
          <div className="col-12 col-lg-4">
            <h1 className="footer-logo-main mb-4">{siteConfig.brandName}</h1>
            <p className="text-muted pe-lg-5 mb-4" style={{ fontSize: '13px', lineHeight: '2.2', textAlign: 'justify' }}>
              We don't just create clothes; we craft legacies. ALZA HMZA stands at the intersection 
              of traditional craftsmanship and contemporary minimalism, bringing you a curated 
              experience of modern luxury.
            </p>
            <div className="d-flex gap-4">
              {Object.entries(siteConfig.socials).map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noreferrer" className="social-pill">
                  <i className={`bi bi-${key} fs-5`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Structured Navigation */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="nav-title">Curation</h6>
            <ul className="list-unstyled footer-nav-list">
              <li><Link to="/women">Women's Collection</Link></li>
              <li><Link to="/men">Men's Portfolio</Link></li>
              <li><Link to="/luxury">Limited Edition</Link></li>
              <li><Link to="/kids">Miniatures (Kids)</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="nav-title">Experience</h6>
            <ul className="list-unstyled footer-nav-list">
              <li><Link to="/track">Concierge (Tracking)</Link></li>
              <li><Link to="/returns">Exchanges</Link></li>
              <li><Link to="/faq">Assistance</Link></li>
              <li className="mt-4 pt-2 border-top border-light">
                <span onClick={() => navigate('/checkout')} className="fw-black text-dark cursor-pointer x-small tracking-widest">
                  PAY ONLINE <i className="bi bi-arrow-right ms-1"></i>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Security */}
          <div className="col-12 col-md-4 col-lg-3">
            <h6 className="nav-title">Headquarters</h6>
            <p className="small text-muted mb-4 lh-lg">{siteConfig.address}</p>
            <div 
              className="secure-badge d-flex align-items-center justify-content-center p-3 cursor-pointer mb-3"
              onClick={() => navigate('/checkout')}
            >
              <i className="bi bi-lock-fill me-2 fs-6"></i>
              <span className="x-small fw-black tracking-widest text-uppercase">Encrypted Online Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Trust Bar */}
      <div className="border-top py-4" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-md-4 text-center text-md-start">
              <p className="x-small mb-0 text-muted tracking-widest">
                © {currentYear} {siteConfig.brandName}. ALL RIGHTS RESERVED.
              </p>
            </div>
            
            <div className="col-md-8">
              <div className="d-flex flex-wrap justify-content-center justify-content-md-end align-items-center gap-4 payment-strip">
                <span className="x-small text-muted fw-bold opacity-50 tracking-widest">GLOBAL SETTLEMENTS:</span>
                
                <div className="method-wrap" onClick={() => navigate('/checkout')}>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width="38" />
                </div>

                <div className="method-wrap" onClick={() => navigate('/checkout')}>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width="30" />
                </div>

                <div className="method-wrap d-flex align-items-center gap-1" onClick={() => navigate('/checkout')}>
                   <i className="bi bi-bank2"></i>
                   <span className="super-tiny fw-bold">WIRE</span>
                </div>

                <div className="cod-badge ps-3 border-start">
                   <span className="super-tiny fw-bold text-muted">CASH ON DELIVERY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Montserrat:wght@300;400;700&display=swap');

        /* Typography Base */
        footer { font-family: 'Montserrat', sans-serif; }
        .x-small { font-size: 10px; }
        .super-tiny { font-size: 9px; letter-spacing: 1px; }
        .tracking-widest { letter-spacing: 3px; }
        
        .luxury-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 2.2rem;
          letter-spacing: -1px;
        }

        .footer-logo-main {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 2.5rem;
          letter-spacing: 10px;
          color: #000;
          text-transform: uppercase;
        }

        .nav-title {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 2.5px;
          margin-bottom: 30px;
          color: #111;
        }

        .footer-nav-list li { margin-bottom: 18px; }
        .footer-nav-list a {
          color: #888;
          text-decoration: none;
          font-size: 12px;
          font-weight: 400;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .footer-nav-list a:hover {
          color: #000;
          letter-spacing: 1px;
        }

        /* Social Icons Pilled */
        .social-pill {
          color: #000;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #eee;
          border-radius: 50%;
          transition: 0.3s;
        }
        .social-pill:hover {
          background: #000;
          color: #fff;
          transform: translateY(-5px);
        }

        /* Secure Badge Box */
        .secure-badge {
          background: #fff;
          border: 1px solid #000;
          transition: 0.3s ease;
        }
        .secure-badge:hover {
          background: #000;
          color: #fff;
        }

        /* Payment Icons Styling */
        .method-wrap {
          cursor: pointer;
          filter: grayscale(100%);
          opacity: 0.4;
          transition: 0.4s;
        }
        .method-wrap:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }

        .payment-strip i { font-size: 1.2rem; }

        @media (max-width: 768px) {
          .footer-logo-main { font-size: 1.8rem; letter-spacing: 5px; }
          .luxury-heading { font-size: 1.8rem; }
        }
      `}</style>
    </footer>
  );
}