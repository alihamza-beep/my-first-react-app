import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from "../../firebaseConfig";
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

export default function ViewSingleItem() {
  const { id } = useParams(); // URL parameter fetch karne ke liye
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem(docSnap.data()); // Firestore document fetch
      }
    };
    fetchItem();
  }, [id]);

  // Task 2e: Delete Operation
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        await deleteDoc(doc(db, "products", id));
        alert("Deleted!");
        navigate('/view-all'); // UI update immediately
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  if (!item) return <div className="p-10 text-center">Loading Details...</div>;

  return (
    <div className="container py-10">
      <h2 className="display-4 font-bold">{item.title}</h2>
      <p className="h3 text-danger font-bold">Rs. {item.price}</p>
      <p className="lead mt-4">{item.description}</p>
      <div className="mt-5">
        <button onClick={() => navigate(`/edit/${id}`)} className="btn btn-dark me-2">Edit Product</button>
        <button onClick={handleDelete} className="btn btn-danger">Delete Product</button>
      </div>
    </div>
  );
}