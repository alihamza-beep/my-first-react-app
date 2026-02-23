import React, { useEffect, useState } from 'react';
import { db } from "../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; 
import { Link } from 'react-router-dom';
import { useAuth } from "../../AuthContext";

export default function ViewAllItems() {
  const [items, setItems] = useState([]);
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
    if (role !== 'admin') {
      alert("Unauthorized! Only Admin can perform this action.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteDoc(doc(db, "products", itemId));
        alert("Item deleted successfully!");
        fetchItems(); 
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 font-bold italic text-center uppercase">Our Collection</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 overflow-hidden">
              
              {/* --- IMAGE DISPLAY AREA --- */}
              <div style={{ height: '250px', backgroundColor: '#f8f9fa' }}>
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x250?text=No+Image'; }}
                  />
                ) : (
                  <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                    No Image Available
                  </div>
                )}
              </div>

              <div className="card-body">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="text-danger fw-bold fs-5">Rs. {item.price}</p>
                <p className="card-text text-muted text-truncate" style={{ fontSize: '0.9rem' }}>
                  {item.description}
                </p>
                
                <Link to={`/item/${item.id}`} className="btn btn-outline-dark btn-sm w-100 mb-2">
                  View Details
                </Link>

                <div className="d-flex gap-2">
                  {role === 'admin' && (
                    <>
                      <Link to={`/edit-item/${item.id}`} className="btn btn-warning btn-sm flex-grow-1">
                        Edit
                      </Link>
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