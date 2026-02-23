import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Navigation ke liye import kiya

export default function HeroSection() {
  
  useEffect(() => {
    // Bootstrap carousel ko manually start karne ke liye
    const bootstrap = window.bootstrap;
    const myCarousel = document.querySelector('#carouselExampleIndicators');
    if (myCarousel && bootstrap) {
      new bootstrap.Carousel(myCarousel, {
        interval: 3000, // 3 seconds baad change hoga
        ride: 'carousel',
        pause: 'hover' // Mouse le jane par ruk jaye ga
      });
    }
  }, []);

  // Banners ka data aur unke respective paths
  const bannerData = [
    { src: "/imgs/banner1.webp", alt: "Banner 1", path: "/sale" },
    { src: "/imgs/banner2.webp", alt: "Banner 2", path: "/new-in" },
    { src: "/imgs/banner3.webp", alt: "Banner 3", path: "/luxury-pret" },
    { src: "/imgs/banner4.webp", alt: "Banner 4", path: "/kids" },
    { src: "/imgs/banner5.webp", alt: "Banner 5", path: "/accessories" }
  ];

  return (
    <div 
      id="carouselExampleIndicators" 
      className="carousel slide" 
      data-bs-ride="carousel"
    >
      
      {/* 1. Indicators (Dots) */}
      <div className="carousel-indicators">
        {bannerData.map((_, index) => (
          <button 
            key={index}
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to={index} 
            className={index === 0 ? "active" : ""} 
            aria-current={index === 0 ? "true" : "false"}
          ></button>
        ))}
      </div>

      {/* 2. Carousel Images (Wrapped in Links) */}
      <div className="carousel-inner">
        {bannerData.map((banner, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            {/* Click karne par page khulne ke liye Link tag use kiya */}
            <Link to={banner.path}>
              <img 
                src={banner.src} 
                className="d-block w-100" 
                alt={banner.alt} 
                style={{ cursor: 'pointer' }} 
              />
            </Link>
          </div>
        ))}
      </div>

      {/* 3. Controls (Arrows) */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <style>{`
        /* Hover effect ko barkarar rakha hai */
        .carousel-item img:hover {
          opacity: 0.9;
          transition: 0.3s ease;
        }
      `}</style>
    </div>
  );
}