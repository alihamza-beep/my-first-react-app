import React, { useState } from 'react';
import { db } from '../../../firebase/firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        ...formData,
        price: Number(formData.price),
        createdAt: new Date()
      });
      alert("Product Added Successfully!");
      setFormData({ title: '', price: '', category: '', description: '' });
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <section className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl my-12 border">
      <h3 className="para mb-6 text-center font-bold">ADD NEW PRODUCT</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          className="border rounded-lg p-3 w-full"
          placeholder="Product Title" 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})} 
          required 
        />
        <input 
          className="border rounded-lg p-3 w-full"
          placeholder="Price (PKR)" 
          type="number" 
          value={formData.price}
          onChange={(e) => setFormData({...formData, price: e.target.value})} 
          required 
        />
        <input 
          className="border rounded-lg p-3 w-full"
          placeholder="Category" 
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})} 
          required 
        />
        <textarea 
          className="border rounded-lg p-3 w-full"
          placeholder="Description" 
          rows="3" 
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})} 
          required 
        />
        <button 
          type="submit" 
          className="bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition"
        >
          SUBMIT TO DATABASE
        </button>
      </form>
    </section>
  );
};

export default AddProductForm;