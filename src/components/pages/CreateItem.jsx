import React, { useState } from 'react';
import { db } from "../../firebaseConfig"; // Task 4: Firebase database access 
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from "../../AuthContext"; // Task 4: Authenticated user ki detail lene ke liye 

export default function CreateItem() {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [file, setFile] = useState(null); // Image store karne ke liye
  const [loading, setLoading] = useState(false); // Uploading state
  const { user } = useAuth(); // Task 4: Current user object

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Security check: Sirf authenticated user hi add kar sakay 
    if (!user) {
      alert("Please login first to add a product!");
      return;
    }

    setLoading(true);

    try {
      let imageUrl = "";

      // 1. Image ko Cloudinary par upload karna
      if (file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "alza_uploads"); // Aapka preset

        const res = await fetch("https://api.cloudinary.com/v1_1/dnbtm0sbe/image/upload", {
          method: "POST",
          body: data,
        });
        
        const fileData = await res.json();
        imageUrl = fileData.secure_url; // Cloudinary se link mil gaya
      }

      // 2. Task 4: Firestore mein data save karte waqt userId aur imageUrl lazmi dalna hai 
      await addDoc(collection(db, "products"), {
        ...product,
        price: Number(product.price),
        imageUrl: imageUrl, // Image URL save ho rahi hai
        userId: user.uid, // Task 4: User ownership tracking 
        userEmail: user.email,
        createdAt: new Date()
      });
      
      alert("Product with Image added to Firestore successfully!");
      setProduct({ name: '', price: '', description: '' });
      setFile(null);
    } catch (error) { 
      console.error("Error adding document: ", error); 
      alert("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 font-bold uppercase">Add New Item</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0 bg-light">
        <input 
          type="text" 
          placeholder="Item Name" 
          className="form-control mb-3" 
          required
          value={product.name} 
          onChange={(e) => setProduct({...product, name: e.target.value})} 
        />
        <input 
          type="number" 
          placeholder="Price" 
          className="form-control mb-3" 
          required
          value={product.price} 
          onChange={(e) => setProduct({...product, price: e.target.value})} 
        />

        {/* --- Image Selection Field --- */}
        <div className="mb-3">
          <label className="form-label text-xs font-bold uppercase">Product Image</label>
          <input 
            type="file" 
            className="form-control" 
            onChange={(e) => setFile(e.target.files[0])}
            required 
          />
        </div>

        <textarea 
          placeholder="Description" 
          className="form-control mb-3" 
          rows="3"
          value={product.description} 
          onChange={(e) => setProduct({...product, description: e.target.value})} 
        />
        
        <button type="submit" disabled={loading} className="btn btn-dark w-100 py-2">
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}