import React from 'react';

export default function ShopByType() {
  const types = [
    {
      name: "Prints",
      img: "/src/assets/imgs/Prints_1.webp",
    },
    {
      name: "Matching Separates",
      img: "/src/assets/imgs/Matching_Separates_1.webp",
    },
    {
      name: "Embroidered",
      img: "/src/assets/imgs/Embroidered.webp",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest border-b-2 inline-block left-1/2 -translate-x-1/2 relative pb-2">
        Shop By Type
      </h2>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {types.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
            {/* Image Section */}
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500" 
            />
            
            {/* Overlay Section */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
            
            {/* Content Section */}
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="text-2xl font-bold tracking-wide mb-3">{item.name}</h3>
              <button className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition uppercase text-sm tracking-widest">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}