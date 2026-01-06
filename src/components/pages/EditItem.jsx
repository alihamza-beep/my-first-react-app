import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 1. Fields ko 'name' aur 'description' rakhein jo Firestore mein hain
  const [formData, setFormData] = useState({ 
    name: '', 
    price: '', 
    description: '' 
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          // Data fetch karke state mein set karein
          setFormData({
            name: data.name || '',
            price: data.price || '',
            description: data.description || ''
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "products", id);
      
      // 2. Firestore mein data update karein aur price ko Number mein convert karein
      await updateDoc(docRef, {
        name: formData.name,
        price: Number(formData.price),
        description: formData.description
      }); 

      alert("Updated Successfully!");
      navigate(`/view-all-items`); // List par wapas jana behtar hai
    } catch (error) {
      console.error("Update Error:", error);
      alert("Update failed! Browser console check karein.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 font-bold">Edit Product</h2>
      <form onSubmit={handleUpdate} className="card p-4 shadow-sm bg-light" style={{maxWidth: '500px'}}>
        <label className="mb-1 fw-bold">Item Name</label>
        <input 
          className="form-control mb-3" 
          placeholder="Item Name"
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          required 
        />

        <label className="mb-1 fw-bold">Price</label>
        <input 
          className="form-control mb-3" 
          type="number" 
          placeholder="Price"
          value={formData.price} 
          onChange={(e) => setFormData({...formData, price: e.target.value})} 
          required 
        />

        <label className="mb-1 fw-bold">Description</label>
        <textarea 
          className="form-control mb-3" 
          placeholder="Description"
          rows="3"
          value={formData.description} 
          onChange={(e) => setFormData({...formData, description: e.target.value})} 
        />

        <button type="submit" className="btn btn-success w-100 py-2">
          Update Now
        </button>
      </form>
    </div>
  );
}