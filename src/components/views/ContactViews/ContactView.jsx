import React from 'react';

export default function ContactView() {
  const faqs = [
    { q: "How can I track my order?", a: "You can track your order using the tracking link sent to your email after purchase." },
    { q: "Do you offer international shipping?", a: "Yes, we ship to select international locations. Contact us for more details." },
    { q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, PayPal, and cash on delivery for local orders." }
  ];

  return (
    <div className="bg-gray-50">
      {/* 🌸 Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Get in Touch with our brand</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto px-4">
          Have questions, feedback, or want to collaborate? We’re here to help.
        </p>
      </section>

      {/* 🌸 Contact Form */}
      <section className="py-16 px-6">
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-gray-200 max-w-lg mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-3 text-center">Contact Us</h3>
          <form action="https://formspree.io/f/myznqzpg" method="POST" className="space-y-6">
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Your Name</label>
              <input type="text" name="name" required className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-gray-500 outline-none" />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Your Email</label>
              <input type="email" name="email" required className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-gray-500 outline-none" />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Your Message</label>
              <textarea name="message" required rows="5" className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-gray-500 outline-none resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-2xl transition shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 🌸 Locations */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Office Locations</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Lahore Office</h3>
            <p className="text-gray-600 mb-4 text-sm">123 Fashion Street, Lahore, Pakistan</p>
            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3456!2d74.3456!3d31.5456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMyJzQ0LjIiTiA3NMKwMjAnNDQuMiJF!5e0!3m2!1sen!2s!4v123456789" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Karachi Office</h3>
            <p className="text-gray-600 mb-4 text-sm">45 Style Avenue, Karachi, Pakistan</p>
            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3456!2d67.0456!3d24.8456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUwJzQ0LjIiTiA2N8KwMDInNDQuMiJF!5e0!3m2!1sen!2s!4v123456789" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 🌸 FAQ Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}