import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignUpView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll to Top Logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-gray-50 font-sans transition-all duration-500 min-h-screen">
      {/* 🔹 Mene yahan se Top Bar aur Navbar nikaal diya hai kyunke wo App.jsx se aa rahe hain */}

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 text-sm px-4">
        <div className="container mx-auto">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link> / 
          <span className="text-gray-800 font-semibold ml-1">Sign Up</span>
        </div>
      </div>

      {/* SIGNUP SECTION */}
      <section className="flex flex-col items-center justify-center py-12 px-6">
        <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Create Your ALZA Account</h2>

          <form action="https://formspree.io/f/myznqzpg" method="POST" className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" name="name" placeholder="Your full name" required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" name="email" placeholder="you@example.com" required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" placeholder="••••••••" required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`} 
                   onClick={() => setShowPassword(!showPassword)}></i>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="••••••••" required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <i className={`bi ${showConfirmPassword ? 'bi-eye' : 'bi-eye-slash'} absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`} 
                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}></i>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <input type="checkbox" name="terms" required className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black" />
              <span className="ml-2">I agree to the <Link to="#" className="text-black font-semibold hover:underline">Terms & Conditions</Link></span>
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
            <i className="bi bi-google text-red-500 text-xl mr-2"></i> Continue with Google
          </button>

          <p className="text-center text-gray-700 mt-6">
            Already have an account? <Link to="/login" className="text-black font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-10 border-t">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <i className="bi bi-shield-lock text-3xl text-black mb-3"></i>
            <h3 className="font-semibold text-gray-800">Secure Sign Up</h3>
            <p className="text-gray-500 text-sm mt-2">Your data is encrypted and protected.</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="bi bi-heart text-3xl text-black mb-3"></i>
            <h3 className="font-semibold text-gray-800">Personalized Experience</h3>
            <p className="text-gray-500 text-sm mt-2">Manage preferences and orders easily.</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="bi bi-truck text-3xl text-black mb-3"></i>
            <h3 className="font-semibold text-gray-800">Fast Checkout</h3>
            <p className="text-gray-500 text-sm mt-2">Save details for a smooth checkout.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Mene yahan se Footer nikaal diya hai kyunke wo App.jsx se aa raha hai */}

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className={`${isScrolled ? 'block' : 'hidden'} fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition`}>
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  );
};

export default SignUpView;