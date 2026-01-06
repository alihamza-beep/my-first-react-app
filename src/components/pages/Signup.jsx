import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Agar file src/AuthContext.jsx hai
import { useAuth } from "../../AuthContext";
const SignUpView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { signup, googleLogin } = useAuth(); // Auth functions nikaale
  const navigate = useNavigate();

  // Task 1 & 2: Email Sign Up Logic
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }
    try {
      // signup function context mein user ko firestore mein bhi save karega
      await signup(email, password); 
      alert("Account created successfully!");
      navigate('/'); 
    } catch (error) {
      alert("Registration Error: " + error.message);
    }
  };

  // Task 1: Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await googleLogin();
      navigate('/');
    } catch (error) {
      alert("Google Sign-In Failed");
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-gray-50 font-sans transition-all duration-500 min-h-screen">
      <div className="bg-gray-100 py-3 text-sm px-4">
        <div className="container mx-auto">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link> / 
          <span className="text-gray-800 font-semibold ml-1">Sign Up</span>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center py-12 px-6">
        <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Create Your ALZA Account</h2>

          {/* Form updated to use onSubmit */}
          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`} 
                   onClick={() => setShowPassword(!showPassword)}></i>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <i className={`bi ${showConfirmPassword ? 'bi-eye' : 'bi-eye-slash'} absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`} 
                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}></i>
              </div>
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

          <button onClick={handleGoogleSignIn} className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
            <i className="bi bi-google text-red-500 text-xl mr-2"></i> Continue with Google
          </button>

          <p className="text-center text-gray-700 mt-6">
            Already have an account? <Link to="/login" className="text-black font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </section>

      {/* Rest of your info section and scroll button remains same... */}
    </div>
  );
};

export default SignUpView;