import React, { useEffect, useState } from 'react';
import { db } from "../../firebaseConfig";
// 🔹 deleteDoc aur doc ko shamil kiya hai
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; 
import { Link } from 'react-router-dom';

export default function ViewAllItems() {
  const [items, setItems] = useState([]);

  // Data fetch karne ka function
  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // 🔹 Delete function jo item ko Firestore se delete karega
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteDoc(doc(db, "products", id));
        alert("Item deleted successfully!");
        fetchItems(); // List refresh karne ke liye
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
                
                {/* 1. View Details (Dynamic Route Task 4) */}
                <Link to={`/item/${item.id}`} className="btn btn-outline-dark btn-sm w-100 mb-2">
                  View Details
                </Link>

                <div className="d-flex gap-2">
                  {/* 2. Edit Button (Update Task 2) */}
                  <Link to={`/edit-item/${item.id}`} className="btn btn-warning btn-sm flex-grow-1">
                    Edit
                  </Link>
                  
                  {/* 3. Delete Button (Delete Task 2) */}
                  <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm flex-grow-1">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}