import React from 'react';
import { Link } from 'react-router-dom'; // Navigation ke liye Link import kiya

export default function Collection() {
  const collections = [
    { name: "MEIN AUR AMI", img: "/imgs/Mein_aur_ami.webp", path: "/luxury-pret/wedding-edition" },
    { name: "ROHANI", img: "/imgs/Rohani.webp", path: "/rozmara-rtw/embroidered" },
    { name: "AFSANA’25", img: "/imgs/Afsana.webp", path: "/new-in" },
    { name: "FESTIVES", img: "/imgs/FESTIVE_1.webp", path: "/luxury-pret/festive-wear" },
    { name: "RIWAYAT", img: "/imgs/Riwayat.webp", path: "/luxury-pret/zarish" },
    { name: "KAHANI’25", img: "/imgs/Kahani.webp", path: "/luxury-pret/zarqash" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest border-b-2 inline-block left-1/2 -translate-x-1/2 relative pb-2">
        Shop By Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {collections.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
            {/* Image Section */}
            <img src={item.img} alt={item.name} className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500" />
            
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
            
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="text-2xl font-bold tracking-wide mb-3">{item.name}</h3>
              {/* Button ko Link mein wrap kiya hai clickable banane ke liye */}
              <Link 
                to={item.path} 
                className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition text-decoration-none"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}