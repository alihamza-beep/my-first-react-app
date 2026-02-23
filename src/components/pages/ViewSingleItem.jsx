import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db } from "../../firebaseConfig";
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { useAuth } from "../../AuthContext";

export default function ViewSingleItem() {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
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

  const handleDelete = async () => {
    if (role !== 'admin') {
      alert("Unauthorized! Only Admin has permission to delete items.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, "products", id));
        alert("Deleted Successfully!");
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
      <div className="card shadow-lg border-0 overflow-hidden bg-white rounded-4">
        <div className="row g-0">
          
          {/* --- LEFT SIDE: IMAGE SECTION --- */}
          <div className="col-md-6 bg-light d-flex align-items-center justify-content-center p-4">
            {item.imageUrl ? (
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxHeight: '500px', objectFit: 'contain' }}
              />
            ) : (
              <div className="text-muted p-5 border rounded-3 bg-white w-100 text-center">
                <i className="bi bi-image" style={{ fontSize: '3rem' }}></i>
                <p className="mt-2">No Image Available for this Product</p>
              </div>
            )}
          </div>

          {/* --- RIGHT SIDE: DETAILS SECTION --- */}
          <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
            <span className="badge bg-secondary mb-2 align-self-start text-uppercase p-2">
              {item.category || "General"}
            </span>
            <h2 className="display-5 fw-bold mb-3">{item.name}</h2>
            <p className="h2 text-danger fw-bold mb-4">Rs. {item.price}</p>
            
            <hr />
            
            <h5 className="fw-bold mt-2">Description:</h5>
            <p className="lead text-muted">{item.description}</p>
            
            <div className="mt-5 d-flex flex-wrap gap-2">
              {role === 'admin' && (
                <>
                  <Link to={`/edit-item/${id}`} className="btn btn-warning px-4 py-2 fw-bold">
                    Edit Product
                  </Link>
                  <button onClick={handleDelete} className="btn btn-danger px-4 py-2 fw-bold">
                    Delete Product
                  </button>
                </>
              )}
              
              <button onClick={() => navigate('/view-all-items')} className="btn btn-secondary px-4 py-2 fw-bold">
                Back to List
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}