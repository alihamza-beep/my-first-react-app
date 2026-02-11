import React, { useEffect, useState } from 'react';
import { db } from "../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; 
import { Link } from 'react-router-dom';
// 🔹 useAuth import kiya taake user role check ho sake
import { useAuth } from "../../AuthContext";

export default function ViewAllItems() {
  const [items, setItems] = useState([]);
  // 🔹 AuthContext se role nikaala
  const { role } = useAuth(); 

  const fetchItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (itemId) => {
    // 🔹 Task 4 logic: Sirf Admin hi delete kar sakta hai [cite: 38]
    if (role !== 'admin') {
      alert("Unauthorized! Only Admin can perform this action.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteDoc(doc(db, "products", itemId));
        alert("Item deleted successfully!");
        fetchItems(); // UI refresh taake delete hua item gayab ho jaye 
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 font-bold italic">Our Collection</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="text-danger fw-bold">Rs. {item.price}</p>
                
                {/* 1. View Details (Sub ke liye accessible hai) [cite: 33, 65] */}
                <Link to={`/item/${item.id}`} className="btn btn-outline-dark btn-sm w-100 mb-2">
                  View Details
                </Link>

                <div className="d-flex gap-2">
                  {/* 🔹 ROLE RESTRICTION: Buttons sirf Admin ko dikhengi [cite: 32, 40] */}
                  {role === 'admin' && (
                    <>
                      {/* 2. Edit Button (Task 4: Admin only update) [cite: 38] */}
                      <Link to={`/edit-item/${item.id}`} className="btn btn-warning btn-sm flex-grow-1">
                        Edit
                      </Link>
                      
                      {/* 3. Delete Button (Task 4: Admin only delete) [cite: 38] */}
                      <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm flex-grow-1">
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}