import React from 'react';

export default function FounderMessage() {
  return (
    <div className="bg-pink-50 py-16">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        <div>
          <img src="./public/imgs/image.png" alt="Founder" className="rounded-2xl shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Message from Our Founder</h2>
          <p className="text-gray-600 leading-relaxed mb-6 italic">
            “At ALZA HMZA, our goal is simple — to make every woman feel confident, beautiful, and comfortable in her own skin.”
          </p>
          <h3 className="text-xl font-semibold text-pink-500">— Aleeza Hamza</h3>
          <p className="text-gray-500 text-sm">Founder & Creative Director</p>
        </div>
      </div>
    </div>
  );
}