import React, { useState } from 'react';
import { db } from "../../firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';

export default function CreateItem() {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        ...product,
        price: Number(product.price),
        createdAt: new Date()
      });
      alert("Product added to Firestore!");
      setProduct({ name: '', price: '', description: '' });
    } catch (error) { console.error("Error adding document: ", error); }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 font-bold uppercase">Add New Item</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0 bg-light">
        <input type="text" placeholder="Item Name" className="form-control mb-3" required
          value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} />
        <input type="number" placeholder="Price" className="form-control mb-3" required
          value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} />
        <textarea placeholder="Description" className="form-control mb-3" rows="3"
          value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} />
        <button type="submit" className="btn btn-dark w-100 py-2">Add Product</button>
      </form>
    </div>
  );
}