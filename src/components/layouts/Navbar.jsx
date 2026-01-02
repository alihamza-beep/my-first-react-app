import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-xs uppercase tracking-widest">
        FREE SHIPPING ON ALL ORDERS ABOVE 3500
      </div>

      {/* Main Navbar */}
      <nav className="navbar bg-white border-bottom py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand fw-bold mx-3" style={{ fontFamily: 'serif', letterSpacing: '4px', fontSize: '32px', color: '#000', textDecoration: 'none' }}>
            ALZA HMZA
          </Link>

          <div className="d-flex mx-auto w-50">
            <input className="form-control border rounded-pill px-4" type="search" placeholder="Search for products" />
          </div>

          <div className="d-flex align-items-center me-3">
            <Link to="/login" className="text-dark me-3 fs-5"><i className="bi bi-person"></i></Link>
            <button className="border-0 bg-transparent fs-4"><i className="bi bi-moon"></i></button>
          </div>
        </div>
      </nav>

      {/* Category Menu (Home ke baad wale items yahan hain) */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-2">
        <div className="container justify-content-center">
          <ul className="navbar-nav text-uppercase fw-semibold" style={{ fontSize: '12px' }}>
            <li className="nav-item mx-3">
              <Link className="nav-link text-danger" to="/">HOME</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark" to="/new-in">NEW IN</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark" to="/rozmara">ROZMARA WINTER VOL. I</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark" to="/about">ABOUT</Link>
            </li>
            {/* Task 1 & 2 ke liye zaroori links [cite: 18, 19] */}
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark " to="/create">CREATE ITEM</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark" to="/view-all">VIEW ALL ITEMS</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark" to="/contact">CONTACTS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;