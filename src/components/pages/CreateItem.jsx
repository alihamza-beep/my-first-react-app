import React, { useState } from 'react';
import { db } from "../../firebaseConfig"; // Task 4: Firebase database access 
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from "../../AuthContext"; // Task 4: Authenticated user ki detail lene ke liye 

export default function CreateItem() {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const { user } = useAuth(); // Task 4: Current user object [cite: 33]

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Security check: Sirf authenticated user hi add kar sakay 
    if (!user) {
      alert("Please login first to add a product!");
      return;
    }

    try {
      // Task 4: Firestore mein data save karte waqt userId lazmi dalna hai 
      await addDoc(collection(db, "products"), {
        ...product,
        price: Number(product.price),
        userId: user.uid, // Task 4: User ownership tracking 
        userEmail: user.email,
        createdAt: new Date()
      });
      
      alert("Product added to Firestore successfully!");
      setProduct({ name: '', price: '', description: '' });
    } catch (error) { 
      console.error("Error adding document: ", error); 
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 font-bold uppercase">Add New Item</h2>
      {/* Form design matching assignment expectations  */}
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
        <textarea 
          placeholder="Description" 
          className="form-control mb-3" 
          rows="3"
          value={product.description} 
          onChange={(e) => setProduct({...product, description: e.target.value})} 
        />
        <button type="submit" className="btn btn-dark w-100 py-2">
          Add Product
        </button>
      </form>
    </div>
  );
}