// /src/components/pages/PagesNotFound.jsx

import React from 'react';

// Component ka naam yahan PagesNotFound hai
function PagesNotFound() {
  return (
    <div className="text-center p-20">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
    </div>
  );
}

// Zaroori: Aapko yahan 'default export' karna hoga
export default PagesNotFound;