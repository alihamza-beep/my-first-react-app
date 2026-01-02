import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', price: '', description: '' });

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFormData(docSnap.data()); // Pre-fill form fields [cite: 37]
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, formData); // Update Firestore on submission [cite: 37]
    alert("Updated Successfully!");
    navigate(`/item/${id}`);
  };

  return (
    <div className="container py-10">
      <h2 className="mb-4">Edit Item</h2>
      <form onSubmit={handleUpdate} className="max-w-md">
        <input className="form-control mb-3" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
        <input className="form-control mb-3" type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
        <button type="submit" className="btn btn-success w-100">Update Now</button>
      </form>
    </div>
  );
}