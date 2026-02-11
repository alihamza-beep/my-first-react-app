import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Featured() {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: 'Rozmara', img: '/imgs/ROZMARA.avif', path: '/men' },
    { name: 'KK Kids', img: '/imgs/kids.avif', path: '/kids' },
    { name: 'Luxury Pret', img: '/imgs/Luxury_Pret.avif', path: '/women' },
    { name: 'Accessories', img: '/imgs/KK_STUDIO.avif', path: '/luxury' },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    
    const scroll = () => {
      if (!isHovering) {
        // Continuous smooth scrolling performance optimized
        container.scrollLeft += 0.8; 
        
        // Infinite seamless loop check
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden border-bottom border-light">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        {/* Left Side: Text Content - Brand Philosophy */}
        <div className="text-center lg:text-left">
          <span className="text-muted x-small tracking-widest mb-2 d-block">CURATED SELECTION</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            SHOP BY CATEGORY
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base mb-8 max-w-sm mx-auto lg:mx-0" style={{ lineHeight: '1.8' }}>
            Discover our artisanal collections designed for the modern lifestyle. Precision in every stitch, luxury in every detail.
          </p>
          <button 
            onClick={() => navigate('/women')}
            className="inline-block border border-dark dark:border-white px-8 py-2.5 font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
          >
            Explore All
          </button>
        </div>

        {/* Right Side: Auto-Scrolling Carousel */}
        <div 
          className="lg:col-span-2 relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-10 overflow-x-hidden whitespace-nowrap py-6 scroll-smooth"
            style={{ cursor: 'grab' }}
          >
            {/* Multi-cloning for extra smooth infinite effect */}
            {[...categories, ...categories, ...categories].map((item, index) => (
              <div 
                key={index} 
                onClick={() => navigate(item.path)}
                className="inline-block flex-shrink-0 text-center group cursor-pointer"
              >
                {/* Visual Frame */}
                <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto overflow-hidden rounded-full border border-gray-100 dark:border-gray-800 shadow-lg">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />
                </div>
                
                <p className="mt-4 font-bold text-gray-800 dark:text-gray-200 text-xs md:text-sm uppercase tracking-widest group-hover:tracking-tighter transition-all">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Luxury Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style>{`
        .x-small { font-size: 10px; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
      `}</style>
    </section>
  );
}