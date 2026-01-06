import React, { useEffect, useState } from 'react';
import { db } from "../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; 
import { Link } from 'react-router-dom';
// 🔹 useAuth import kiya taake user role aur ID ka pata chal sake [cite: 102, 109]
import { useAuth } from "../../AuthContext";

export default function ViewAllItems() {
  const [items, setItems] = useState([]);
  // 🔹 AuthContext se user aur role nikaala [cite: 136, 137]
  const { user, role } = useAuth(); 

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

  const handleDelete = async (item) => {
    // 🔹 Task 4 logic: Admin sab delete kar sakta hai, User sirf apna item [cite: 107, 108]
    const isOwner = item.userId === user?.uid;
    const isAdmin = role === 'admin';

    if (isAdmin || isOwner) {
      if (window.confirm("Are you sure you want to delete this item?")) {
        try {
          await deleteDoc(doc(db, "products", item.id));
          alert("Item deleted successfully!");
          fetchItems(); // UI refresh [cite: 40]
        } catch (error) {
          console.error("Error deleting document: ", error);
        }
      }
    } else {
      alert("Unauthorized! Only Admin or the Item Creator can delete this.");
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
                
                {/* 1. View Details (Sub ke liye accessible hai) [cite: 134] */}
                <Link to={`/item/${item.id}`} className="btn btn-outline-dark btn-sm w-100 mb-2">
                  View Details
                </Link>

                <div className="d-flex gap-2">
                  {/* 🔹 Role-Based Visibility: Buttons sirf Admin ya Owner ko dikhengi  */}
                  {(role === 'admin' || item.userId === user?.uid) && (
                    <>
                      {/* 2. Edit Button (Task 4: Secure Update) [cite: 35, 105] */}
                      <Link to={`/edit-item/${item.id}`} className="btn btn-warning btn-sm flex-grow-1">
                        Edit
                      </Link>
                      
                      {/* 3. Delete Button (Task 4: Secure Delete) [cite: 38, 105] */}
                      <button onClick={() => handleDelete(item)} className="btn btn-danger btn-sm flex-grow-1">
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