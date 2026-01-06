import React from 'react';

export default function VideoSection() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* --- Pehla Section: VASL (Video Left par rakha hai) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left: Video */}
        <div className="w-full">
          <video 
            src="/videos/video 1.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-[350px] md:h-[550px] object-cover block"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Right: Text */}
        <div className="flex flex-col justify-center items-center text-center p-10 bg-white h-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
            VASL PRE-WINTER’25
          </h2>
          <p className="text-gray-600 mb-6 max-w-sm">
            Step into the season with styles that speak for themselves.
          </p>
          <button className="bg-black text-white px-10 py-3 font-semibold hover:bg-gray-800 transition">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* --- Dusra Section: KHADDAR (Isay Swap kar diya hai) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left: Text Content (Desktop par left par aayega) */}
        <div className="flex flex-col justify-center items-center text-center p-10 bg-[#f9f9f9] h-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">
            KHADDAR
          </h2>
          <p className="text-gray-600 mb-6 max-w-sm">
            Soft, breathable, and winter-ready—our Khaddar collection keeps you comfortable.
          </p>
          <button className="bg-black text-white px-10 py-3 font-semibold hover:bg-gray-800 transition">
            SHOP NOW
          </button>
        </div>
        
        {/* Right: Video (Isay Right side par set kar diya hai) */}
        <div className="w-full">
          <video 
            src="/videos/video 2.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-[350px] md:h-[550px] object-cover block"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
}