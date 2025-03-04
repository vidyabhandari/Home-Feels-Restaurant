import React from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from "../components/admin/AdminSidebar";


const AdminDashboardPage = () => {
  return (
    <div>
      <AdminNavbar />
      <hr />
      <div className="app-content">
        <AdminSidebar />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
