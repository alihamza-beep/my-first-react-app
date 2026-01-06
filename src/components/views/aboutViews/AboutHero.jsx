import React from 'react';

export default function AboutHero() {
  return (
    <div className="relative h-[80vh]">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video 3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay + Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold tracking-wide mb-4">
            About <span className="text-pink-400">ALZA HMZA</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Where elegance meets tradition — redefining fashion for the confident, creative woman of today.
          </p>
        </div>
      </div>
    </div>
  );
}