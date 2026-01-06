import React, { useEffect } from 'react';

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

  return (
    <div 
      id="carouselExampleIndicators" 
      className="carousel slide" 
      data-bs-ride="carousel"
    >
      
      {/* 1. Indicators (Dots) */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
      </div>

      {/* 2. Carousel Images */}
      <div className="carousel-inner">
        {/* Path check karlein: /src/assets/... hamesha slash se shuru karen */}
        <div className="carousel-item active">
          <img src="/imgs/banner1.webp" className="d-block w-100" alt="Banner 1" />
        </div>
        <div className="carousel-item">
          <img src="/imgs/banner2.webp" className="d-block w-100" alt="Banner 2" />
        </div>
        <div className="carousel-item">
          <img src="/imgs/banner3.webp" className="d-block w-100" alt="Banner 3" />
        </div>
        <div className="carousel-item">
          <img src="/imgs/banner4.webp" className="d-block w-100" alt="Banner 4" />
        </div>
        <div className="carousel-item">
          <img src="/imgs/banner5.webp" className="d-block w-100" alt="Banner 5" />
        </div>
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
    </div>
  );
}