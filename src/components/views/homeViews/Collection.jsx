import React from 'react';

export default function Collection() {
  const collections = [
    { name: "MEIN AUR AMI", img: "./public/imgs/Mein_aur_ami.webp" },
    { name: "ROHANI", img: "./public/imgs/Rohani.webp" },
    { name: "AFSANA’25", img: "./public/imgs/Afsana.webp" },
    { name: "FESTIVES", img: "./public/imgs/FESTIVE_1.webp" },
    { name: "RIWAYAT", img: "./public/imgs/Riwayat.webp" },
    { name: "KAHANI’25", img: "./public/imgs/Kahani.webp" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest border-b-2 inline-block left-1/2 -translate-x-1/2 relative pb-2">
        Shop By Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {collections.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={item.img} alt={item.name} className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="text-2xl font-bold tracking-wide mb-3">{item.name}</h3>
              <button className="inline-block bg-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}