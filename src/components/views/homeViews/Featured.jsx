import React from 'react';

export default function Featured() {
  const scroll = (direction) => {
    const container = document.getElementById('scrollContainer');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative">
      {/* Scrollbar hide karne ke liye inline style */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 🖋️ Left Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-5 uppercase">Shop By Category</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            From everyday essentials to statement pieces, find the perfect look in every category.
          </p>
          <a href="#" className="inline-block bg-black text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-all">
            View All Collections →
          </a>
        </div>

        {/* 🖼️ Right Scrollable Section */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-100 transition"
          >
            ‹
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-100 transition"
          >
            ›
          </button>

          {/* Scroll Container */}
          <div 
            id="scrollContainer" 
            className="w-full overflow-x-auto flex gap-10 px-12 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {/* Items List */}
            {[
              { name: 'Rozmara', img: './public/imgs/ROZMARA.avif' },
              { name: 'KK Kids', img: './public/imgs/kids.avif' },
              { name: 'Luxury Pret', img: './public/imgs/Luxury_Pret.avif' },
              { name: 'Accessories', img: './public/imgs/KK_STUDIO.avif' }
            ].map((item, index) => (
              <div key={index} className="flex-shrink-0 text-center snap-center min-w-[13rem]">
                <img 
                  src={item.img} 
                  className="w-52 h-52 object-cover rounded-full border border-gray-200 shadow-sm mx-auto hover:scale-105 transition-transform duration-300" 
                  alt={item.name} 
                />
                <p className="mt-4 font-semibold text-gray-900 text-lg uppercase tracking-wide">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}