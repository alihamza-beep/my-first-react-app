import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db } from "../../firebaseConfig";
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

export default function ViewSingleItem() {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() }); // ID aur data dono save karein
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, [id]);

  // Task 2e: Delete Operation
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, "products", id));
        alert("Deleted Successfully!");
        // Sahi path par navigate karein
        navigate('/view-all-items'); 
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Delete failed! Rules check karein.");
      }
    }
  };

  if (!item) return <div className="p-10 text-center">Loading Details...</div>;

  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 p-4 bg-light">
        {/* 'title' ko 'name' se replace kiya jo Firestore mein hai */}
        <h2 className="display-5 fw-bold">{item.name}</h2>
        <p className="h3 text-danger fw-bold">Rs. {item.price}</p>
        <p className="lead mt-4 text-muted">{item.description}</p>
        
        <div className="mt-5 d-flex gap-2">
          {/* Edit path ko sahi kiya */}
          <Link to={`/edit-item/${id}`} className="btn btn-warning px-4">
            Edit Product
          </Link>
          
          <button onClick={handleDelete} className="btn btn-danger px-4">
            Delete Product
          </button>
          
          <button onClick={() => navigate('/view-all-items')} className="btn btn-secondary px-4">
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
}