import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db } from "../../firebaseConfig";
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
// 🔹 Auth context import kiya taake role check kiya ja sakay
import { useAuth } from "../../AuthContext";

export default function ViewSingleItem() {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  // 🔹 AuthContext se current role fetch kiya
  const { role } = useAuth();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() }); 
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, [id]);

  // Task 4: Secure CRUD Access Control - Delete Operation [cite: 35, 38]
  const handleDelete = async () => {
    // 🔹 Strict Security Check: Sirf Admin hi delete kar sakay [cite: 32, 38]
    if (role !== 'admin') {
      alert("Unauthorized! Only Admin has permission to delete items.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, "products", id));
        alert("Deleted Successfully!");
        // Successful delete ke baad list par wapas bhejain [cite: 34]
        navigate('/view-all-items'); 
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Delete failed! Database rules check karein.");
      }
    }
  };

  if (!item) return <div className="p-10 text-center">Loading Details...</div>;

  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 p-4 bg-light">
        {/* Display Item Details [cite: 65] */}
        <h2 className="display-5 fw-bold">{item.name}</h2>
        <p className="h3 text-danger fw-bold">Rs. {item.price}</p>
        <p className="lead mt-4 text-muted">{item.description}</p>
        
        <div className="mt-5 d-flex gap-2">
          {/* 🔹 ROLE RESTRICTION: Edit aur Delete sirf Admin ko dikhengi [cite: 32, 40] */}
          {role === 'admin' && (
            <>
              {/* Task 4: Admin can manage all records [cite: 38] */}
              <Link to={`/edit-item/${id}`} className="btn btn-warning px-4">
                Edit Product
              </Link>
              
              <button onClick={handleDelete} className="btn btn-danger px-4">
                Delete Product
              </button>
            </>
          )}
          
          {/* Back button for all authenticated users [cite: 33] */}
          <button onClick={() => navigate('/view-all-items')} className="btn btn-secondary px-4">
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
}