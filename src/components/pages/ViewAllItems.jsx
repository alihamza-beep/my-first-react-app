import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function ViewAllItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchItems();
  }, []);

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
                <Link to={`/item/${item.id}`} className="btn btn-outline-dark btn-sm w-100">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}