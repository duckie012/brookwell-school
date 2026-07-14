import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <aside>Admin Sidebar</aside>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
