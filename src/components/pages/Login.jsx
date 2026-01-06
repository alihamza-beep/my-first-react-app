import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../AuthContext"; // Firebase auth function lene ke liye

const LoginView = () => {
  const [year] = useState(new Date().getFullYear());
  const [email, setEmail] = useState(''); // Email state
  const [password, setPassword] = useState(''); // Password state
  const { login } = useAuth(); // AuthContext se login function liya
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Firebase login call
      alert("Login Successful!");
      navigate("/"); // Login ke baad home par bhejne ke liye
    } catch (error) {
      console.error(error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 text-sm px-4">
        <div className="container mx-auto">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link> / 
          <span className="text-gray-800 font-semibold ml-1">Login</span>
        </div>
      </div>

      {/* LOGIN SECTION */}
      <section className="flex flex-col items-center justify-center py-12 px-6">
        <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Welcome Back</h2>

          {/* Sahi Form: Formspree hatakar Firebase ka handleSubmit lagaya */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="you@example.com" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="••••••••" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" name="remember" className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-black hover:underline">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Sign In
            </button>
          </form>

          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
            <i className="bi bi-google text-red-500 text-xl mr-2"></i> Continue with Google
          </button>

          <p className="text-center text-gray-700 mt-6">
            Don’t have an account? 
            <Link to="/signup" className="text-black font-semibold hover:underline ml-1">Sign up</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginView;