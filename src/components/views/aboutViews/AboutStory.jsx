import React from 'react';

export default function AboutStory() {
  const timelineData = [
    { year: "2018", title: "The Beginning", desc: "ALZA HMZA started as a passion project to blend grace and simplicity.", color: "border-pink-500" },
    { year: "2019", title: "First Collection", desc: "Launched our first prêt collection — embracing minimalism.", color: "border-purple-500" },
    { year: "2024", title: "Digital Expansion", desc: "Launched our online store, bringing luxury fashion worldwide.", color: "border-emerald-500" }
  ];

  return (
    <>
      {/* Brand Story */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Story</h2>
        <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
          Founded in 2018, <b>ALZA HMZA</b> was born from a dream to celebrate individuality through fashion. 
          We combine contemporary trends with graceful detailing.
        </p>
      </div>

      {/* Journey Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200"></div>
            {timelineData.map((item, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'} relative z-10`}>
                <div className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 ${item.color} hover:shadow-xl transition`}>
                  <h3 className="text-xl font-semibold mb-2">{item.year} — {item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}