// import React, { useState } from 'react';
import AddMatch from '../components/AddMatch';
import AddPlayer from '../components/AddPlayer';
const Admin = () => {
  return (
    <div className="admin-panel bg-gray-100  p-4 rounded shadow-md">
      <h1 className='text-center text-3xl font-medium'>Admin Panel</h1>\
      {/* Include the AddMatch component */}
      <AddMatch />
      {/* Include the AddPlayer component */}
      <AddPlayer />
    </div>
  );
};

export default Admin;